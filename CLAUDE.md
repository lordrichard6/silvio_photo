# silvio_photo — Agent Playbook

> Project-specific rules. Top-level `/Users/paulolopes/Desktop/lopes2tech/CLAUDE.md` still applies.

## ⚠️ Path contains spaces

Parent directory is `Silvio Photo/` (with a space). Always quote paths in shell commands.

## Client / deployment

- **Client:** Silvio Valente
- **Live URL:** https://www.silviovalentt.pt/
- **Domain:** silviovalentt.pt, registered on Amen.pt, DNS → Vercel
- **Current stack:** Angular 21.2.8, Bootstrap 5, SCSS, EmailJS, Express SSR
- **Next.js migration:** mentioned previously, **no port found in this monorepo as of 2026-04-30**. Either it lives elsewhere or hasn't started. Treat the Angular project as the only one until/unless a Next.js port appears here. If you start one, add the path here.

## Preview / verification

- **Never run `preview_start`.** The user runs the dev server themselves.
- **Verification:** Angular project — use `npx tsc --noEmit` or `npx ng build --configuration=development` dry check, depending on the task. No browser.

## Landmines & gotchas

- **Path with space:** Parent dir is `Silvio Photo/`. Quote in shell, or use `node_modules/.bin/...` to avoid PATH-with-space issues.
- **EmailJS keys are public-by-design** but `service_id` + `template_id` are exposed in the bundle. Contact form has honeypot + 2s time-based check + RGPD consent checkbox as anti-spam (2026-04-30). If spam still gets through, add reCAPTCHA v3.
- **Image resize protocol:** webp images >500KB should be capped at 1600px on the longest side, q72 with `cwebp -q 72 -m 6`. The naive `magick -resize 1920x>` re-encode at q80 makes them *larger* on portrait images.
- **Cookie consent:** uses Google Consent Mode v2. GA defaults to `denied`; the banner upgrades to `granted` on accept. Don't add other tracking that fires before consent.
- **GA: Consent Mode v2 requires the `consent default` call BEFORE `gtag('js', ...)`** — order matters in `index.html`.
- **CSP is in `vercel.json`** — when adding new third-party scripts/fonts/CDNs, update `script-src`/`style-src`/`connect-src` accordingly or the browser will block them.

## Update this file

When you discover a non-obvious behavior or footgun, add it here. Bug found once should not bite twice.
