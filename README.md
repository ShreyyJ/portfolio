# Shreya J — Portfolio

A full-featured, animated portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- **Custom animated cursor** with smooth follower
- **Scroll progress bar** at the top
- **Hero section** with parallax, floating particles, type animation
- **Glassmorphic design** throughout — dark, minimal, premium
- **Animated skills** with progress bars and a marquee strip
- **Horizontal-scrollable project cards** with modal detail view
- **Contact form** (opens native mail client)
- **Responsive** on all devices

## 🚀 Deploy to Vercel (3 steps)

### Option A: Via GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click **Deploy** — Vercel auto-detects Next.js

### Option B: Via Vercel CLI
```bash
npm install -g vercel
cd shreya-portfolio
npm install
vercel --prod
```

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
shreya-portfolio/
├── app/
│   ├── globals.css       # Fonts, custom cursor, glassmorphism utilities
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Cursor.tsx        # Animated custom cursor
│   ├── ScrollProgress.tsx # Top progress bar
│   ├── Nav.tsx           # Sticky glassmorphic navbar
│   ├── Hero.tsx          # Landing with parallax + type animation
│   ├── About.tsx         # Bio + stats + education
│   ├── Skills.tsx        # Categorized skills + marquee + certs
│   ├── Projects.tsx      # Horizontal scroll cards + modals
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer with watermark
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `globals.css` (`:root`)
- **Content**: Update text/links in each component
- **Projects**: Edit the `projects` array in `components/Projects.tsx`
- **Skills**: Edit `skillCategories` in `components/Skills.tsx`
