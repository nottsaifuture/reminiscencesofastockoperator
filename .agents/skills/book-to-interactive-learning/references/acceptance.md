# Release acceptance checklist

Apply to the requested scope. Record checks actually run; do not claim the checklist itself is evidence.

## Content and localization

- Book/author/edition are identified correctly; every promised chapter is present.
- Every lesson has original analysis, a substantial sourced case, its own connection, a decision exercise, quiz feedback, reflection, and a relevant image.
- Both language editions have matching stable IDs, complete content, and no accidental mixed-language UI beyond proper names/source titles.
- Language switching preserves the current lesson, progress, bookmarks, and reader-authored notes.
- All routes, missing-route states, search, downloads, charts, and dynamically revealed feedback work in both languages.
- Public HTML, JS content, rendered text, and downloads contain no private-PDF reading instructions or attachment paths. Legitimate source citations remain.

## Interaction and accessibility

- Exercise correct and incorrect quiz/scenario responses and feedback, reveal/hide controls, next/previous navigation, bookmarks, and completion.
- Test note saving, reload persistence, export, scoped deletion/cancellation, and blocked-storage fallback. Render user text safely; never interpret note content as HTML.
- Check keyboard controls, focus visibility, headings, input labels, meaningful alt text, contrast, reduced motion, and chart data alternatives.
- Inspect mobile, tablet, and desktop; no horizontal overflow, clipped controls, missing images, or unreadable graphs.

## Historical charts

- Compare selected plotted values with the recorded source; test start/end points, milestone controls, date spacing, price basis, and arithmetic.
- Tables agree with visual values; currency, dates, units, adjustment basis, and limitations are visible in both languages.
- Historical observations and synthetic examples cannot be confused. No fabricated interpolation is labelled as observed data.

## Privacy and release

- Inspect network requests: no unexpected analytics, fonts, APIs, or data transmission. Hosting logs are acknowledged accurately.
- Inspect output/archive contents, not just the build source. No book PDF, raw extraction, secrets, internal skill files, or unintended personal metadata.
- Test using production security headers where supported; inspect browser console and missing resources.
- Run the documented build. Check root/subpath assets and direct route reloads appropriate to hosting.
- Document source/asset provenance and unresolved verification limits. Do not label risk reduction as legal clearance.
- Report local tests, Git push, workflow status, and live checks separately, with evidence for each claimed outcome.
