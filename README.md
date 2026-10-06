# 股票作手回憶錄 · Operator’s Library

An independent bilingual investment learning companion to Edwin Lefèvre’s *Reminiscences of a Stock Operator*. The fictional narrator is inspired by 傑西·李佛摩 Jesse Livermore.

## Features

- 24 chapter lessons in English and Hong Kong Traditional Chinese
- Original book paraphrases and critical analysis, seven sourced real-world cases, and hypothetical worked examples
- A distinct case-based scenario and quiz in each chapter, recall cards, expandable timelines, and chapter illustrations
- Search, bookmarks, progress, browser-local notes, export, and scoped data deletion
- Interactive loss-recovery, leverage, fee, and synthetic price-path models

Each chapter has its own analysis and scenario. Seven conceptual case illustrations are shared when chapters revisit the same event. AI-generated illustrations are labelled and are not historical photographs or scans of publisher artwork. Historical examples are comparisons rather than forecasts or personalised recommendations.

The 2010 Wiley annotated edition was consulted for context; the original author and annotator are credited on the public About page. The book PDF and annotation text are not distributed. Reader-specific references to a supplied file and its page numbers have been removed from the public interface and downloads. Source links do not grant reuse rights in third-party material. These measures are not a legal clearance or a guarantee of compliance everywhere.

## Run locally

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

No dependency installation or build step is required to develop the site. Routes use hashes, such as `#lesson/1-1`.

## Build and deploy

```sh
python3 scripts/build_site.py
```

This produces `dist/` and `cloudflare-site.zip`, using an explicit allowlist of public files. See [CLOUDFLARE.md](CLOUDFLARE.md) for Direct Upload and Git integration. The existing GitHub Pages workflow uses the same build output. A successful push or local test does not verify a live Cloudflare deployment.

## Main files

- `content.js`, `content-zh-HK.js`: lesson, case, and scenario content
- `app.js`: routes, interactions, storage, and education/privacy notices
- `i18n.js`: interface translations; personal notes are never translated
- `charts.js`: original synthetic price paths, interactive SVG, and accessible data table
- `style.css`, `design.css`, `learning.css`: responsive styling
- `study-notes*.txt`: original downloadable study notes
- `assets/art/`: conceptual case images adapted from the owner's reference learning library
- `_headers`: Cloudflare Pages security headers

## Privacy and validation

The code contains no analytics, external font requests, accounts, forms, or backend API. Preferences, notes, progress, and bookmarks stay in localStorage; temporary in-memory storage permits export when persistence is unavailable. Language editions share lesson IDs. Deletion is scoped to this library's keys and requires a reader confirmation; it leaves unrelated project data untouched. A hosting provider may still process delivery/security logs, as the public notice explains.

Validation covers all 24 chapters in both languages, quiz/scenario branches, recall and timelines, images, translated searches/downloads, shared state, keyboard controls, and mobile/tablet/desktop layouts. Release tests additionally cover the exact upload allowlist, page-reference removal, chart arithmetic, scoped deletion/cancellation, the actual CSP headers, and the absence of external browser requests. Documentary source pages remain linked, but their availability was not revalidated because the environment proxy blocked those domains. No investment strategy is backtested or certified by these checks.
