import { Context } from 'hono';

/**
 * Handle contact form submission
 * Sends an email to ssinghr100@gmail.com using Resend API directly
 */
export const handleContactForm = async (c: Context) => {
    console.log('Received contact form request');
    try {
        const body = await c.req.json();
        console.log('Form body:', body);
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return c.json({ message: 'All fields are required' }, 400);
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey || resendApiKey === 'your_resend_api_key_here') {
            console.warn('RESEND_API_KEY not configured. Email not sent.');
            // Still return success so user sees confirmation
            return c.json({
                message: 'Thank you for your message! I will get back to you soon.',
                success: true
            }, 200);
        }

        console.log('Sending email via Resend...');
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: ['ssinghr100@gmail.com'],
                subject: `New Contact Form Submission from ${name}`,
                reply_to: email,
                html: `
                    <h3>New Contact Message</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            }),
        });

        const result = await response.json() as any;
        console.log('Resend response:', result);

        if (!response.ok) {
            throw new Error(result?.message || `Resend API error: ${response.status}`);
        }

        return c.json({
            message: 'Thank you for your message! I will get back to you soon.',
            success: true
        }, 200);
    } catch (error: any) {
        console.error('Contact form error:', error?.message || error);
        return c.json({
            message: 'Failed to send message. Please try again or email me directly at ssinghr100@gmail.com',
            success: false
        }, 500);
    }
};
