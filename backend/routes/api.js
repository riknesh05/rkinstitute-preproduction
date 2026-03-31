import { Router } from 'express';
import contactRoutes from './contact.js';

const router = Router();

// Mount sub-routes
router.use('/contact', contactRoutes);

// Example: Add more routes here
// router.use('/courses', courseRoutes);

export default router;
