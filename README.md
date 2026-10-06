# The Operator’s Library

An independent, responsive reading companion to Edwin Lefèvre’s *Reminiscences of a Stock Operator*, inspired by the supplied 2010 Wiley annotated edition. The website contains original thematic summaries, not the uploaded PDF or a reproduction of Jon D. Markman’s annotations.

## Run locally

No build step or package installation is required. With Python 3 installed:

```sh
cd /workspace/reminiscencesofastockoperator
python3 -m http.server 8000 --bind 0.0.0.0
```

Open port 8000 in your local development environment. The entry point is `index.html`; styling and behavior live in `styles.css` and `app.js`.

## Features

- Six original lessons with category filters and search
- Keyboard-accessible lesson dialogs and browser-local reading progress
- Interactive knowledge check with explanatory feedback
- Browser-local notebook with plain-text export
- Responsive layout and reduced-motion support

Reading progress and notes use localStorage and remain in the current browser. Clearing site data removes them; exported notes provide a portable copy. Google Fonts is an optional external request with system-font fallbacks. No backend, API keys, analytics, or paid services are required.

## Publish on GitHub Pages

Push to `main`, then in GitHub **Settings → Pages → Build and deployment**, select **GitHub Actions**. The included workflow stages only the three public site files and deploys them. If the first run occurred before Pages was enabled, rerun it from the Actions tab.

Expected URL once successfully deployed:
`https://nottsaifuture.github.io/reminiscencesofastockoperator/`

The repository upload and Pages deployment are separate operations. A successful push does not by itself confirm the site is live.

## Content

This is an independent educational and literary companion, not investment advice or an official publisher website. The original book was published in 1923 and follows Larry Livingston, a fictional character inspired by Jesse Livermore. The supplied edition adds commentary by Jon D. Markman. The PDF is not included in this repository.
