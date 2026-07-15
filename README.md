# Flutter Developer Portfolio

A premium, interactive developer portfolio for Ahmed Mostafa, built using **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**.

## EmailJS Contact Form Integration

This project has an integrated Contact Form powered by [EmailJS](https://www.emailjs.com/). It allows visitors to send messages directly from the website without needing a dedicated backend server.

### Local Configuration

To configure the email service locally:

1. Copy the example environment variables file to create a local configuration file:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and fill in your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

*Note: `.env.local` is whitelisted in `.gitignore` to prevent committing your production credentials to Git.*

### Production Deployment (e.g., Vercel)

When deploying to Vercel or any other hosting provider, configure these environment variables in your provider's project settings dashboard:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Do not toggle "expose to client-side" unless the hosting platform requires it; Next.js automatically bundles variables prefixed with `NEXT_PUBLIC_` for the browser.

### Anti-Spam Protection

The contact form includes built-in protection mechanisms:
- **Honeypot Trap**: A hidden field that automatically filters out bots filling in details.
- **Submission Cooldown**: A 60-second cooldown period between successive submissions is enforced using local storage.
