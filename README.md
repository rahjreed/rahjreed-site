# R2G2 — Rahj Reed Golden Games

**Custom Retro Games for Learning, Competition & Celebration.**

An arcade-first React website, retaining the existing Vite and Tailwind setup.
No deployment, DNS, domain, payment, or external game configuration is changed.

## Local development

Use Node.js 22.12 or newer (Node 24 was used during implementation).

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173.

```sh
npm run build
npm run preview
```

The production build is written to `dist/`. Run `npm test` for audio lifecycle and catalog checks. No lint script is configured.
On this Windows machine, if npm is missing from PATH, use `C:\Program Files\nodejs\npm.cmd`.
This environment needed Node's `--use-system-ca` flag during dependency installation to trust the system certificate store; TLS verification was not disabled.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home with featured Kingdom Race and the full lineup |
| `/arcade` | Searchable, availability-filtered game library |
| `/games/:slug` | Individual game description and availability |
| `/custom-games` | Custom game options, starting prices, and process |
| `/about` | About R2G2 |
| `/contact` | Inactive inquiry form preview |
| Unmatched route | Branded not-found page |

React Router uses browser history and clean paths. A staging host must serve `index.html`
for application routes such as `/games/kingdom-race`, including direct requests and refreshes.
No hosting rewrites were added. Verify the existing host's SPA fallback before public release.

## Source map

- `src/App.jsx`: route definitions.
- `src/components/SiteLayout.jsx`: shared header, mobile navigation, footer, page title/description, and navigation focus.
- `src/components/ArcadeButton.jsx`: internal navigation, safe external links, and button variants.
- `src/components/GameCard.jsx`: reusable cartridge cards and availability badges.
- `src/components/PageIntro.jsx`: consistent page introductions.
- `src/components/Brand.jsx`: shared gradient gamepad and R2G2 identity.
- `src/components/FeaturedGame.jsx`: catalog-driven featured game showcase.
- `src/components/ArcadeAtmosphere.jsx`: decorative lighting and perspective grid.
- `src/components/ArcadeControls.jsx`: accessible sound, CRT, and motion toggles.
- `src/hooks/useArcadeEffects.js`: session-level effects state and interaction handling.
- `src/utils/retroAudio.js`: opt-in Web Audio synthesis with a reusable context and resource cleanup.
- `tests/arcade.test.js`: automated audio lifecycle and game-catalog checks.
- `src/data/games.js`: centralized catalog, tagline, featured selection, and playable-state guard.
- `src/pages/`: Home, Arcade, GameDetails, CustomGames, About, Contact, and NotFound.
- `src/index.css`: Tailwind entry point and responsive retro design.
- `public/images/`: five original local SVG cover illustrations and the R2G2 favicon. These are concept illustrations, not game screenshots.
- `index.html`: initial metadata, favicon, and JavaScript fallback message.
- `package.json` / `package-lock.json`: dependencies, including React Router 7.18.5.
- `.gitignore`: excludes installed dependencies, output, cache, and local/editor files.

`src/main.jsx`, Vite/PostCSS/Tailwind configuration, and unused starter files are retained.
The broken Google image-generation calls, expired countdown, old service pricing,
and Callista marketing UI have been removed from the active application.

## Adding a game

Add a unique slug, title, descriptions, genre, accent, artwork, features, and status
to `src/data/games.js`. Put artwork in `public/images/`. The library, game details,
inquiry game choices, and home lineup derive from this catalog.

Use `status: 'coming-soon'` without a `playUrl` until the destination has been verified.
Only entries with `status: 'playable'` AND a `playUrl` display launch links.
No game engine or external game source is bundled or modified here.

## Kingdom Race verification

On October 30, 2026 (America/Indianapolis), https://lionsgate.callistadigital.com/
returned HTTP 200 and rendered its browser-game landing screen with Press Start
and How to Play controls. No gameplay or external configuration was changed.
The destination currently calls itself **Lions Gate Sword Sharpener — Scripture Arcade**.
R2G2 retains the requested **Kingdom Race: The Lion's Gate** catalog title and explains
the destination title on its game detail page. Full gameplay/device certification is outside this website change.

## Inquiry activation still needed

The contact page is explicitly a preview. Submit is disabled and the form handler
prevents transmission. No email address, endpoint, persistence, or success response is invented.
Game-detail and pricing links can preselect the relevant game/project type.

Before enabling submissions, provide:

1. A verified recipient or approved inquiry service.
2. A working submission backend with validation, spam protection, error handling, and delivery verification.
3. A privacy notice describing how inquiry details are used and retained.

No payments are implemented. Prices are presented as starting prices with final scope quoted separately.

## Verification and staging

- Production build passes with the patched router dependency.
- Dependency installation audit reports zero known vulnerabilities.
- Browser checks cover navigation, all five game detail routes, availability filters,
  search and reset, inquiry game preselection, disabled submission, and mobile menu dismissal.
- Responsive checks at 390px and 320px confirm the home layout has no horizontal overflow.
- Local direct-route loading passes. Hosted SPA fallback still requires staging verification.

The website foundation is ready for a staging review with inquiries visibly inactive.
Production deployment, domain changes, and external game changes require separate authorization.

## Gemini arcade visual redesign

Recovery checkpoint: `7d3106f` on `codex-development`, saved before the redesign.
The redesign uses the supplied Gemini CSS/JSX direction: near-black slate,
gold-gradient branding, purple/magenta/cyan lighting, rounded luminous panels,
an animated perspective grid, and a split featured Kingdom Race showcase.
Local SVG illustrations remain original concept cover art.

The underlying routes, React 18/Vite/Tailwind stack, catalog, search, availability
filters, inquiry preselection, starting prices, and external game URL are retained.
Catalog copy reflects the approved single-player Kingdom Race and planned game descriptions.
No ratings, release dates, customer claims, add-on prices, or unbuilt features are presented as live.

Sound is off on every fresh page load. Enabling it is an explicit user gesture;
one audio context is reused for the enabled session and closed on mute/unmount.
Each oscillator and gain node disconnects after use. Sounds are short and quiet,
with rapid-click throttling. No audio files or network calls are required.

CRT scanlines default on at low opacity and affect artwork only; they never
cover controls or intercept input. CRT can be disabled. Background motion can
be paused independently. A system reduced-motion preference disables animation
and transitions, initializes Motion off, and disables its toggle while that
preference is active. Settings persist across client-side navigation only.

Verification includes five passing unit tests, production build, desktop/mobile browser checks,
functional search/filter checks, and DOM/computed-style checks for effects controls.
All ten page routes were checked at 390px without horizontal overflow. Home,
library, pricing, and contact also passed at 320px. Reduced-motion overrides were
verified in the compiled CSS; OS-level preference switching was not simulated.
Hosted refresh/fallback verification remains pending; this redesign does not add
or alter Vercel configuration. No deployment has been performed.
