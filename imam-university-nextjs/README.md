# IMAM University — Professional Next.js Website

A complete frontend-first university website prototype built with **Next.js 15, React 19, Tailwind CSS, Framer Motion and Lucide React**.

## Run on Windows / PowerShell

```powershell
cd "path\to\imam-university-nextjs"
npm install --include=optional
npm run dev
```

Open:
- Website: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## Admin Demo Login

- Email: `admin@imamuniversity.edu.so`
- Password: `imam2026`

The current Admin Panel is a frontend prototype. Applications, contact messages and news drafts use browser `localStorage` so the client can test a realistic content workflow before the production backend is connected.

## Important content note

The project includes verified IMAM University information supplied for the redesign, plus clearly demo-oriented supporting copy and showcase records where official data was not yet available. Before production launch, replace demo fees, publication examples, partner placeholders, official calendar dates and any unverified operational details with university-approved information.

## Media

- The supplied university video is used as the Home hero background.
- The same video appears on About in an interactive player with Play, Pause, Restart and Mute controls.
- Existing project media is used throughout the site.
- A small number of external university-learning showcase images are used with automatic local-image fallbacks if they cannot load.

## Production Phase

After approval, the planned production architecture can connect:

- Node.js + Express
- PostgreSQL
- Secure authentication / authorization
- Database-backed CMS
- Real media uploads
- Application workflow
- Contact inbox
- Email notifications
- Audit logs
