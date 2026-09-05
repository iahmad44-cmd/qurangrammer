import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = new URL("./", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
const js = await readFile(new URL("assets/app.js", root), "utf8");

const paths = [];
for (const language of ["urdu", "english"]) {
  for (const match of js.matchAll(/id: \"([^\"]+)\"[\s\S]*?files: \{ ur: \{([^}]*)\}, en: \{([^}]*)\}/g)) {
    const [, id, ur, en] = match;
    const flags = language === "urdu" ? ur : en;
    if (/pdf: true/.test(flags)) paths.push(`pdf/${language}/lecture-${id}.pdf`);
    paths.push(`docx/${language}/lecture-${id}.docx`);
  }
}

let failed = 0;
console.log("STATUS  BYTES     PATH");
for (const path of paths) {
  try {
    const info = await stat(resolve(new URL(path, root).pathname.slice(1)));
    const ok = info.isFile() && info.size > 0;
    console.log(`${ok ? "PASS" : "FAIL"}    ${String(info.size).padStart(7)}   ${path}`);
    if (!ok) failed++;
  } catch {
    console.log(`FAIL          0   ${path}`);
    failed++;
  }
}
if (!html.includes('assets/app.js') || !js.includes('href="pdf/${') || !js.includes('href="docx/${')) {
  console.log("FAIL    rendered-link templates are missing");
  failed++;
}
console.log(`\n${paths.length - failed}/${paths.length} available links passed.`);
process.exitCode = failed ? 1 : 0;
