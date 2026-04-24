# silvio_photo — Agent Playbook

> Project-specific rules. Top-level `/Users/paulolopes/Desktop/lopes2tech/CLAUDE.md` still applies.

## ⚠️ Path contains spaces

Parent directory is `Silvio Photo/` (with a space). Always quote paths in shell commands.

## Client / deployment

- **Client:** Silvio Valente
- **Live URL:** https://www.silviovalentt.pt/
- **Domain:** silviovalentt.pt, registered on Amen.pt, DNS → Vercel
- **Current stack:** Angular 20, Bootstrap 5, SCSS, EmailJS
- **Migration in progress:** being converted to Next.js

## Preview / verification

- **Never run `preview_start`.** The user runs the dev server themselves.
- **Verification:** Angular project — use `npx tsc --noEmit` or `npx ng build --configuration=development` dry check, depending on the task. No browser.

## TODO — fill in as landmines surface

- [ ] Angular build gotchas
- [ ] EmailJS template IDs + env
- [ ] Next.js migration status & known-good branch
- [ ] SEO / canonical rules

## Update this file

When you discover a non-obvious behavior or footgun, add it here. Bug found once should not bite twice.
