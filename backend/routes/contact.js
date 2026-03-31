import { Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

// POST /api/contact — receives form data and sends a Telegram notification
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, course, query } = req.body;

        // Validate required fields
        if (!name || !phone || !course) {
            return res.status(400).json({
                success: false,
                error: 'Name, phone, and course are required.',
            });
        }

        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env');
            return res.status(500).json({
                success: false,
                error: 'Server misconfiguration. Please call us directly.',
            });
        }

        // Build formatted Telegram message
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
                error: 'Notification failed. Please call us directly.',
            });
        }

        res.json({
            success: true,
            message: 'Thank you! We will contact you within 24 hours.',
        });
    } catch (error) {
        console.error('Contact route error:', error);
        res.status(500).json({
            success: false,
            error: 'Something went wrong. Please try again or call us.',
        });
    }
});

export default router;
