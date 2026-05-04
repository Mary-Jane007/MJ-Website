# Mary-Jane Design

Premium interior design marketing site (Next.js 14 App Router, Tailwind CSS, Framer Motion).

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables (optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL (no trailing slash), used for metadata, `sitemap.xml`, and `robots.txt`. |
| `NEXT_PUBLIC_FACEBOOK_URL` | Full URL to your Facebook page (otherwise a generic Facebook link is used). |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key — when set with `RESEND_FROM_EMAIL`, contact form emails are sent. |
| `RESEND_FROM_EMAIL` | Verified sender in Resend, e.g. `Mary-Jane Design <mail@yourdomain.com>`. |
| `CONTACT_TO_EMAIL` | Inbox that receives contact submissions (defaults to the public Gmail on the site). |

## Contact form

Submissions post to `POST /api/contact`. With **Resend** env vars configured, messages are emailed to `CONTACT_TO_EMAIL` (or the default site email) with `reply_to` set to the visitor. Without Resend, the API validates input and logs the payload server-side.

## Deploy on Vercel

Import the repo in Vercel, set env vars if needed, and deploy. `next build` must pass locally first.

## Push to GitHub

This project matches the empty repo [Mary-Jane007/MJ-Website](https://github.com/Mary-Jane007/MJ-Website):

```bash
git branch -M main
git remote add origin https://github.com/Mary-Jane007/MJ-Website.git
git push -u origin main
```

If `origin` already exists, use `git remote set-url origin https://github.com/Mary-Jane007/MJ-Website.git` instead.
