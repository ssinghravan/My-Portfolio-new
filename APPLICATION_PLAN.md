# Personal Portfolio Application Plan - Kunj Desai

## 🎯 Overall Vision
A modern, premium, and futuristic personal portfolio for "Kunj Desai", a Full Stack Developer. The site will feature a dark theme with purple/blue gradients, glassmorphism, and smooth animations.

## 🚀 Key Features

### 1. Navigation & Layout
- **Sticky Navbar**: Glassmorphism effect, smooth scroll links.
- **Dark Theme**: Unified futuristic look.
- **Smooth Animations**: Using Framer Motion for fade-ins, slide-ins, and micro-interactions.

### 2. Sections
- **🏠 Home (Hero)**: 
    - Name: Kunj Desai
    - Tagline: "Full Stack Developer | Building Scalable & Smart Solutions"
    - CTA: "View Projects", "Download Resume"
    - Animated text/keywords.
- **👨‍💻 About Me**: 
    - Professional intro, coding journey, and key strengths.
- **🛠 Skills**: 
    - Categorized (Frontend, Backend, Tools) with icons and cards.
- **🚀 Projects**: 
    - Grid display with tech stack, live demo, and GitHub links. Hover effects.
- **🖼 Gallery**: 
    - Grid of screenshots with lightbox preview.
- **📜 Certificates**: 
    - Categorized certificates with issuer and date.
- **✍ Blog**: 
    - Short previews of technical articles.
- **📄 Resume**: 
    - Embedded preview or high-visibility download.
- **📞 Contact**: 
    - Functional-looking contact form and social links (LinkedIn, GitHub, Email).

## 🛠 Tech Stack
- **Frontend**: React (TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📂 Component Structure
- `src/components/`
    - `Navbar.tsx`
    - `Hero.tsx`
    - `About.tsx`
    - `Skills.tsx`
    - `Projects.tsx`
    - `Gallery.tsx`
    - `Certificates.tsx`
    - `Blog.tsx`
    - `Contact.tsx`
    - `Footer.tsx`
    - `ui/` (Reusable components: Button, Card, SectionTitle, GlassCard)
- `src/data/`
    - `portfolioData.ts` (All mock data)

## 🎨 Design System
- **Background**: Dark (zinc-950 or custom dark blue/black)
- **Accents**: Purple-500, Blue-500 gradients
- **Typography**: Inter / Poppins (Modern Sans-serif)
- **Effects**: Backdrop blur (glassmorphism), neon glows, subtle shadows.
