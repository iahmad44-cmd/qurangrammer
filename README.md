# Quran Grammar

A bilingual Urdu/English library of Quranic Arabic grammar notes. The site is plain HTML, CSS and JavaScript. It currently covers Lectures 1–44, with some lectures grouped in combined files, plus two supplementary topics.

The public website is https://iahmad44-cmd.github.io/qurangrammer/. GitHub Actions publishes changes to GitHub Pages after a push to `main`.

## Add future lectures

1. Place each source PDF and Word file in `pdf/urdu`, `pdf/english`, `docx/urdu`, or `docx/english`, using the existing `lecture-<id>` naming pattern. Keep combined ranges as one ID, such as `lecture-45-46`.
2. Add one lesson object to the `lessons` array in `assets/app.js`, with Urdu and English titles and topic summaries. Set each language's `pdf` flag to `true` only if its PDF exists. Every listed lesson needs both Word files under the current renderer.
3. Update the displayed lecture range and count in `assets/app.js` and `index.html`.
4. Run `node check-links.mjs` before publishing. It checks all links advertised by the cards.

## Source status

- Lectures 1–44 are represented in both languages. Combined files include 13–14, 20–21, 27–28, 31–32, 33–34, 35–36, 40–41, and 42–43.
- The supplementary notes cover Adad wa Madood and Murakkab Atfi, in both languages and both formats.
- The supplied archive did not contain an Urdu PDF for Lecture 29. Its Urdu Word file and both English files are available; the website does not offer a broken Urdu PDF link.
