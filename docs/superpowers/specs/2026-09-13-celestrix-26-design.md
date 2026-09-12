# CELESTRIX '26 Website Design

## Direction

A single-page-style React site for Gojan School of Business and Technology's CELESTRIX '26 symposium. The visual direction is a TVA field manual crossed with a cosmic observatory: deep-space black, oxidized greens, brass, technical labels, and three Infinity Stone identities for the event pages.

## Architecture

- Vite + React application.
- React Router routes for the home page and one dedicated route per event.
- Tailwind CSS for layout utilities and design tokens, with a small global CSS layer for cosmic effects and typography.
- Framer Motion for route transitions, staggered reveals, portal motion, hover states, and reduced-motion-safe animation.
- Shared data-driven event configuration so cards, event pages, navigation, prize displays, and forms stay consistent.
- Supplied Google Form URL is the destination for registration CTAs and form submissions.

## Routes

- `/` home, including hero, countdown, event cards, prizes, about, coordinators, and contact/footer.
- `/events/quizverse` Space Stone / electric blue.
- `/events/innoverse` Time Stone / emerald green.
- `/events/marvel-mayhem` Mind Stone / golden yellow.

## Component Boundaries

- `Navbar`: sticky global navigation, event dropdown, mobile drawer, crest placeholder.
- `PortalTransition`: route loading overlay and aperture animation.
- `Hero`: event identity, CTA, date, venue, milestone badge, ambient visual field.
- `EventCard`: compact event preview with stone visual and route link.
- `PrizeStrip` and `PrizeCard`: reusable prize information with the shared prize structure.
- `EventPage`: data-driven template for event hero, details, rules, eligibility, prizes, registration, and coordinator contact.
- `RegistrationForm`: visual form surface that redirects to the Google Form on submit.
- `CoordinatorGrid`: student/staff coordinator contacts.
- `Footer`: venue, event date, contact and navigation details.

## Visual System

- Palette: void black, space black-green, TVA chartreuse, brass gold, paper white, electric blue, emerald green, and mind-stone gold.
- Typography: expressive serif display face for the CELESTRIX wordmark, disciplined sans-serif for body copy, and mono labels for system metadata.
- Signature element: a rotating temporal aperture behind the hero and during route transitions.
- Event pages preserve the same structure but shift their accent, gem glow, and supporting UI to the event's stone identity.
- Use a typographic `GSBT` crest placeholder for the navbar until the official college logo is available.

## Content Rules

- Global event facts are fixed to the supplied brief.
- Rules, eligibility, descriptions, and team constraints use visible `[EDIT ME]` markers where details are not yet supplied.
- Every homepage event preview and every event page shows the same prize breakdown: 1st ₹3000, 2nd ₹2000, 3rd ₹1000.
- Registration is presented as free entry and redirects to the supplied Google Form.

## Responsive and Accessibility Behavior

- Desktop uses asymmetric editorial grids; mobile collapses to a single readable column.
- Mobile navigation uses a focusable drawer with the same event links.
- Buttons and icon controls have labels/tooltips and visible focus styles.
- Decorative animation respects `prefers-reduced-motion`.
- Stable aspect ratios and sizing prevent event cards, gem visuals, and controls from shifting as content loads.

## Validation

- Install dependencies and run the production build.
- Run the local dev server and inspect the home page and event routes at desktop and mobile widths.
- Confirm the registration redirect, route transitions, mobile drawer, countdown, and all required event/prize/contact content are present.
