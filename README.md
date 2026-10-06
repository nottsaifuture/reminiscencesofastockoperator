# Reminiscences of a Stock Operator — Investment Study Library

An independent investment learning website based on Edwin Lefèvre’s book, using the supplied 2010 Wiley edition with commentary by Jon D. Markman. The design follows the owner's Education of a Speculator study library.

## Learning content

- 24 lessons, one for every numbered book chapter, grouped into six modules
- Original book paraphrases, critical analysis, hypothetical worked examples, exercises, recall cards, and chapter-specific quizzes
- Seven sourced later case studies: LTCM, the Swiss franc policy change, Knight Capital, Buffett's fund wager, the Flash Crash, GameStop, and SPIVA methodology
- A searchable, illustrated chapter guide, bookmarks, reading progress, private chapter notes, and note export
- One English / 香港繁體中文 button for the whole site, including all 24 lessons, cases, scenarios, quizzes, lab labels, and downloadable study notes
- A distinct case-based decision exercise in every chapter, immediate explanatory feedback, and expandable case timelines
- Three interactive models: loss recovery, exposure/equity, and compounding after fees

The case studies are reused across chapters with distinct analytical connections. They are later learning additions, not events claimed to appear in the original book. Source links identify documentary sources; external source availability was not independently revalidated in this environment because its network proxy blocked those domains. The case summaries and conceptual illustrations were adapted from the owner's reference library.

Chapter references identify the first three PDF file pages of each chapter in the uploaded edition, not printed pagination or exhaustive citations for every theme. Chapter I starts at file page 22 and Chapter XXIV at 638. The original chapters have Roman numeral headings; lesson titles are original study labels. The full PDF and annotation text are not published.

## Local development

No dependencies or build step are required:

```sh
cd /workspace/reminiscencesofastockoperator
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the served site. Direct lesson routes use hashes, for example `#lesson/1-1`; there are no server-side routing requirements.

- `content.js`: English content for 24 lessons, six modules, seven cases, and 24 decision scenarios
- `content-zh-HK.js`: complete Hong Kong Traditional Chinese learning edition
- `i18n.js`: interface translations and number-dependent labels; personal notes are never translated
- `study-notes-zh-HK.txt`: downloadable Chinese study notes
- `app.js`: routes, interactions, browser storage, and calculations
- `style.css`, `design.css`, `learning.css`: responsive styling
- `assets/art/`: conceptual AI illustrations adapted from the reference library; `reference-prompts.json` preserves the original prompt provenance
- `study-notes.txt`: downloadable original notes

Progress, bookmarks, and personal notes use browser localStorage. The new site uses `operator-study-v2` and `operator-note-*` keys to avoid collisions with the other GitHub Pages project. Original-site notes are retained under their old key and included in exports. The old six-theme progress remains untouched but is not mapped onto the new 24-chapter curriculum. No account, API key, external font, or analytics service is required.

## Deployment

The GitHub Actions workflow deploys the public assets on a push to `main`. In **Settings → Pages**, select **GitHub Actions**. If Pages was enabled after a failed run, manually run the existing workflow again. Do not create a second deployment workflow.

Expected deployed URL: https://nottsaifuture.github.io/reminiscencesofastockoperator/

Publication success is separate from a successful Git push. Check the Actions run for deployment status.

## Validation

Browser validation covers all 24 lesson routes, quiz branches, recall cards, case imagery and connections, progress and bookmark persistence, note export, filters, all public routes at mobile/tablet widths, and the lab's formulas including zero-cost and negative-equity boundaries. The project does not backtest or validate an investment strategy.

## Language and chapter illustrations

The language button preserves the active lesson, progress, bookmarks, and personal notes. Its choice is saved as `operator-language`; the two editions share lesson identifiers. Notes remain in the language the reader wrote them. If browser storage is unavailable, edits remain in memory for the current session and can still be exported.

Every lesson and chapter card displays a relevant case illustration. Seven conceptual images are shared where chapters revisit the same real event; each of the 24 chapters has its own scenario and analysis. The Hong Kong title is 股票作手回憶錄, with 傑西·李佛摩 Jesse Livermore identified as the inspiration for the narrator. Edwin Lefèvre remains credited as the author.

Bilingual validation exercises both answer branches of all 24 scenarios and quizzes in both languages, recall cards, expandable timelines, language persistence, note/bookmark/progress preservation, Chinese search and downloads, and all routes at mobile, tablet, and desktop widths.
