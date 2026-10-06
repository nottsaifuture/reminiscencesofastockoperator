# Publish with Cloudflare Pages

This is a static site: no backend, secret, database, package installation, or live market-data service is needed.

## Direct Upload

1. Run `python3 scripts/build_site.py` from the repository.
2. In Cloudflare Pages, create a **Direct Upload** project.
3. Upload `cloudflare-site.zip` (or the contents of `dist/`). The ZIP contains `index.html` at its root.
4. Deploy, then check the home page and `/#lesson/1-1` in English and 香港繁體中文.

Keep the `_headers` file in the upload. Cloudflare Pages uses it to apply the site's content-security policy, referrer policy, and browser-permission restrictions. An arbitrary static host may ignore this file; the headers are tested locally but their application must be checked on the actual deployment.

## Git integration (alternative)

Connect this repository to Cloudflare Pages using:

- Production branch: `main`
- Build command: `python3 scripts/build_site.py`
- Build output directory: `dist`
- Framework preset: None
- Environment variables: none required

The build stages an explicit allowlist of 19 files. It excludes the book PDF, Git metadata, documentation, development scripts, tests, prompt provenance, and personal notes. Personal reader notes exist only in browser storage, not in the deployable files. GitHub Pages remains available through its existing workflow; choosing Cloudflare does not automatically remove the GitHub site.

## Reader data when changing address

Export personal notes from the old website before moving. Browser storage belongs to an origin, so a new Cloudflare URL does not automatically inherit notes, bookmarks, or progress from GitHub Pages. No cloud transfer is implemented. The About page provides scoped deletion and note export.

## Hosting settings and public notices

The supplied site has no analytics, advertising, accounts, payment processing, or contact form. Do not enable Cloudflare Web Analytics, other injected scripts, or data-collection integrations without updating the public privacy explanation and reviewing their requirements. `connect-src 'none'` in the supplied policy also blocks client-side network integrations by default.

The bilingual About page identifies the original author, distinguishes original analysis from third-party sources, labels conceptual illustrations and synthetic charts, explains browser storage and hosting logs, and describes the limits of general investment education. It does not represent a legal clearance or guarantee compliance in every jurisdiction. A deployment with commercial services, personalised advice, or additional data collection needs a fresh review of its actual activities and audience.
