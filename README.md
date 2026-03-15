# Apex Fire Consulting

Professional fire department accreditation consulting website — CFAI & CAAS guidance.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display + DM Sans (loaded via `next/font`)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or download the project, then:
cd apex-fire-consulting

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to a GitHub repository
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

### Other Platforms

Any platform supporting Node.js 18+ can run this app. Run `npm run build` then `npm start`.

## Project Structure

```
apex-fire-consulting/
├── app/
│   ├── layout.tsx        # Root layout, font config, metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Tailwind base + custom CSS
├── components/
│   ├── Nav.tsx           # Sticky nav with mobile hamburger
│   ├── Hero.tsx          # Full-height hero section
│   ├── TrustStrip.tsx    # Gold trust/credential bar
│   ├── About.tsx         # Bio + credential cards
│   ├── Services.tsx      # 6 service cards grid
│   ├── Process.tsx       # 5-step timeline
│   ├── Contact.tsx       # Contact form with success state
│   └── Footer.tsx        # Site footer
├── hooks/
│   └── useInView.ts      # Intersection Observer hook
├── tailwind.config.ts    # Custom colors + fonts
└── next.config.mjs
```

## Customization

### Colors
Defined in `tailwind.config.ts`:
- `navy`: `#0f1e2e`
- `gold`: `#c9972b`
- `cream`: `#faf8f4`

### Contact Form
The form currently logs to console and shows a success state. To connect a backend, replace the `handleSubmit` function in `components/Contact.tsx` with a `fetch` call to your API endpoint or a service like Resend, Formspree, or EmailJS.

## Brand

**Apex Fire Consulting** — CFAI & CAAS accreditation consulting led by C.J. Carr, Assistant Fire Chief, Montgomery Fire Rescue. Executive Fire Officer · CPSE Peer Assessor · 20 Years Fire Service · U.S. Marine Corps Veteran.
