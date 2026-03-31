import { Router } from 'express';

const router = Router();

// POST /api/contact — handle contact form submissions
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and message are required.',
            });
        }

        // TODO: Add email sending, database storage, etc.
        console.log('📩 Contact form submission:', { name, email, phone, message });

        res.json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            error: 'Something went wrong. Please try again later.',
        });
    }
});

export default router;
