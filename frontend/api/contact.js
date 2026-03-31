// Vercel Serverless Function — POST /api/contact
// Sends a Telegram message to the admin bot chat when the contact form is submitted.
// 
// Required environment variables in Vercel dashboard:
//   TELEGRAM_BOT_TOKEN  — from @BotFather (e.g. 123456789:ABCdef...)
//   TELEGRAM_CHAT_ID    — your personal/group chat ID (e.g. -100123456789)

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, phone, course, query } = req.body;

    // Basic validation
    if (!name || !phone || !course) {
        return res.status(400).json({
            success: false,
            error: 'Name, phone, and course are required.',
        });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars');
        return res.status(500).json({
            success: false,
            error: 'Server misconfiguration. Please contact the admin directly.',
        });
    }

    // Build the Telegram message
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const message = [
        `📩 *New Enquiry — RK Institute*`,
        ``,
        `👤 *Name:* ${name}`,
        `📧 *Email:* ${email || '—'}`,
        `📞 *Phone:* ${phone}`,
        `📚 *Course:* ${course}`,
        `💬 *Query:* ${query || '—'}`,
        ``,
        `🕐 ${timestamp} IST`,
    ].join('\n');

    try {
        const telegramRes = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            }
        );

        const data = await telegramRes.json();

        if (!data.ok) {
            console.error('Telegram API error:', data);
            return res.status(500).json({
                success: false,
                error: 'Failed to send notification. Please call us directly.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Thank you! We will contact you within 24 hours.',
        });
    } catch (err) {
        console.error('Network error contacting Telegram:', err);
        return res.status(500).json({
            success: false,
            error: 'Something went wrong. Please try again or call us directly.',
        });
    }
}
