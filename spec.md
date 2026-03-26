# Sayam Kharb Portfolio

## Current State
New project — no existing frontend or backend code.

## Requested Changes (Diff)

### Add
- Full single-page React portfolio with 7 sections: Hero, About, Skills, Experience, Projects, Certifications, Contact/Footer
- Sticky glassmorphism navbar with dark/light mode toggle
- Hero: headline, sub-headline, CTA buttons (Download Resume, View My Work), interactive 3D scene (React Three Fiber geometric globe/mesh responding to mouse)
- About section: narrative text on Business Strategy + Technical Execution
- Skills Bento Grid ("The Data Lab"): 4 tiles — Core Tools, Libraries, Methods, Soft Skills — with glassmorphism hover
- Experience Timeline: 2 entries (Data Analyst Intern, Marketing Intern)
- Projects Bento Grid: 4 interactive cards (Sales Dashboard, Customer Behavior, Customer Segmentation, ChatGPT Assistant)
- Certification auto-scroll carousel: 15+ certs from Deloitte, British Airways, Cisco, Tata, HP, IBM, etc.
- Contact/Footer: email, phone, location, GitHub & LinkedIn icons
- Dark/Light mode toggle with state persistence
- Framer Motion scroll-reveal animations and hover states
- Fully responsive (mobile, tablet, desktop)

### Modify
- None

### Remove
- None

## Implementation Plan
1. Set up Tailwind config with custom colors (charcoal, electric blue, slate white) and dark mode class strategy
2. Create ThemeContext for dark/light mode state
3. Build Navbar component with glassmorphism, nav links, theme toggle
4. Build HeroSection with React Three Fiber 3D rotating globe + mouse parallax, headline, CTAs
5. Build AboutSection with narrative text and animated reveal
6. Build SkillsBento component with 4 glassmorphism tiles
7. Build ExperienceTimeline with 2 entries
8. Build ProjectsBento with 4 interactive cards
9. Build CertificationCarousel with infinite horizontal auto-scroll
10. Build ContactFooter with email, phone, location, social icons
11. Wire all sections in App.tsx with smooth-scroll IDs
12. Add Framer Motion scroll-reveal wrappers throughout
