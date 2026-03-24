import { Hono } from 'hono';
import * as contactController from '../controllers/contactController.ts';
import catchAsync from '../utils/catchAsync.ts';

const contactRoutes = new Hono();

/**
 * POST /contact
 * Handle contact form submission
 */
contactRoutes.post('/contact', catchAsync(contactController.handleContactForm));

export default contactRoutes;
