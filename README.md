# Eureka Euchre — site

Marketing, privacy, and support pages for [Eureka Euchre](https://github.com/meuhardy/Eureka-euchre),
served at **https://euchre.thatsmysecret.net**.

React + Vite + Tailwind, built to static files and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## The constraint this site is built around

`/privacy/` and `/support/` are filed with App Store Connect as the app's
**Privacy Policy URL** and **Support URL**. Apple checks them. That drives two decisions
that should not be undone casually:

1. **The build is multi-page, not a single-page app.** `vite.config.ts` declares
   `index.html`, `privacy/index.html`, and `support/index.html` as entry points, so each
   route is a real file. Client-side routes would 404 on a cold hit. There is no
   `/privacy.html` or `/support.html`; those paths 404.
2. **Every page is prerendered.** `npm run build` does an SSR pass (`src/entry-server.tsx`)
   and injects the rendered markup into each page's `#root` before the client hydrates it.
   Fetch `/privacy/` with JavaScript disabled and the full policy is there in the source.

The deploy workflow asserts both, plus the presence of `dist/CNAME`, and fails rather than
publishing a site that would break those URLs.

## Working on it

```
npm install
npm run dev       # dev server
npm run build     # typecheck, build, SSR pass, prerender → dist/
npm run preview   # serve dist/ exactly as Pages will
```

## Content

The legal copy in `src/PrivacyPage.tsx` and `src/SupportPage.tsx` is reproduced verbatim
from `docs/store/privacy-policy.md` and `docs/store/support.md` in the iOS repo, where it
is the source of truth and was corrected once already (`51b6b98`). Change it there first.

## Images

`public/img/` is generated from the iOS repo's submission screenshots and app icon — the
same artwork that goes to App Store Connect — and committed. To regenerate:

```
scripts/build-images.sh [path-to-ios-repo] [ref]
```

Requires `cwebp` (`brew install webp`). Defaults to `../Euhardy-euchre` at
`origin/feature/app-store-submission-prep`. 7.8MB of source JPEGs become ~300KB of WebP.
