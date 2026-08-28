# Quran Grammar

A bilingual Urdu/English library of Lisan ul Quran Arabic-grammar notes. The site is plain HTML, CSS and JavaScript and needs no installation.

## View it on your computer

1. Open this folder.
2. Double-click `index.html`.
3. The website opens in your browser. PDF links work when the folder structure is kept unchanged.

## Publish with GitHub Pages

This repository includes an automatic GitHub Pages workflow.

1. Open the repository on GitHub.
2. Choose **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy static site to Pages” to finish.
5. Return to **Settings → Pages** to find the published address.

## Publish with Netlify Drop

1. Visit [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag this entire project folder onto the page.
3. Wait for Netlify to upload it and show the live address.

## Add a future lesson

Suppose the next lesson is Lecture 18.

1. Add the available files using exactly these names:
   - `pdf/urdu/lecture-18.pdf`
   - `pdf/english/lecture-18.pdf`
   - `docx/urdu/lecture-18.docx` (if available)
   - `docx/english/lecture-18.docx` (if available)
2. Open `assets/app.js` in a text editor.
3. At the end of the `lessons` array, copy the complete object for Lecture 17, including its opening `{` and closing `}`.
4. Paste a comma after Lecture 17, then paste the copied object beneath it.
5. Change `id` and `number` to `"18"`. Replace the four title/topic fields with Lecture 18 text.
6. Set each available file to `true`. Omit a `docx` entry or set it to `false` when there is no Word file. The website never creates a broken link for a file marked unavailable.
7. Save the file, open `index.html`, and search for Lecture 18 to check both languages.

The lesson count and cards are generated from this one array, so no HTML changes are needed. The same pattern supports Lecture 19 and later lessons.

## Source-file status

- English PDFs: all 16 current lesson files are present (Lectures 13–14 are combined).
- Urdu PDFs: all 16 current lesson files are present (Lectures 13–14 are combined).
- Urdu Word downloads: all 16 current lesson files are present.
- English Word downloads: currently available for Lecture 17.
