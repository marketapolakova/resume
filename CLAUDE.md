# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production build locally
npm run lint      # ESLint via Next.js
```

## Architecture

This is a **Next.js 16 personal CV/portfolio site** for Markéta Štorc Poláková, deployed to Vercel.

### Internationalization

The site supports two locales configured in `next.config.js`:
- `cs` (Czech) — default locale, served at `/`
- `en` (English) — served at `/en`

Locale detection is disabled; the user switches manually. The active locale is detected via `useRouter().locale` and passed as a boolean `en` prop down the component tree. All bilingual text is handled inline with ternary `en ? "..." : "..."` expressions or via data objects with `.cz` / `.en` keys (see `data/`).

**Important:** Only the homepage has a physical duplicate entry (`pages/en/index.js`). All other pages (`resume.jsx`, `skills.jsx`, etc.) are served for both locales via Next.js implicit locale routing — there are no physical files under `pages/en/` for them.

### Page structure

- `pages/index.js` / `pages/en/index.js` — homepage (only pages with duplicate entry points)
- `pages/resume.jsx`, `skills.jsx`, `portfolio.jsx`, `contact.jsx` — served for both `/` and `/en/` prefixes automatically
- `pages/caseStudies/` — three UX portfolio case studies (English-only content)
- `pages/api/chat.js` — proxy to Python backend for the chat widget
- `pages/_app.js` — app shell; imports Bootstrap and renders `ChatWidget` globally

### Data layer

`data/resumeData.js` and `data/skillsData.js` export plain JS objects with `cz` and `en` keys. These are the single source of truth for all CV content — edit here to update any page that displays resume or skills data.

### Chat widget

A floating chat widget (`components/chat/ChatWidget.jsx`) is mounted globally in `_app.js` and appears on every page. It:
- Calls `pages/api/chat.js` (Next.js proxy) which forwards to a Python/FastAPI backend on Railway
- Maintains conversation history in `sessionStorage` (persists across page navigations within a tab)
- Caps history sent to the API at the last 10 messages
- The Python API URL is set via `PYTHON_API_URL` env var (set on Vercel); falls back to `http://localhost:8000` for local dev

### Components

`components/` is organized by feature:
- `navbar/` — desktop (`Navbar`) and mobile (`NavbarMobile`) variants; both receive `en` and `link` props
- `chat/` — `ChatWidget.jsx` floating chat UI
- `resumeComponent/` — timeline-based resume layout
- `timeline/` — reusable timeline UI
- `skills/` — skills display
- `caseStudiesSections/` — portfolio case study sections
- `imageComponent/` — image utilities

### Styling

CSS Modules (`styles/pages/*.module.css`) scoped per page. Global Bootstrap 5 + `react-bootstrap` for layout and components. CSS animations (`slide-in-left`, `slide-in-right`, `fade-in`, `fade-in-delay`) are defined globally in `styles/App.css` and applied via className.
