import { readFile, stat } from "node:fs/promises";

const html = await readFile(new URL("index.html", import.meta.url), "utf8");
const js = await readFile(new URL("assets/platform.js", import.meta.url), "utf8");
const css = await readFile(new URL("assets/platform.css", import.meta.url), "utf8");
let failures = 0;

function check(condition, message) {
  console.log(`${condition ? "PASS" : "FAIL"}  ${message}`);
  if (!condition) failures++;
}

check(html.includes('assets/platform.js') && html.includes('assets/platform.css'), "platform assets are wired into index.html");
check(html.includes('id="partways"') === false && html.includes('id="pathways"'), "primary page sections are present");
check(css.includes("@media(max-width:480px)"), "narrow-mobile layout is defined");
check(!/docs\.google\.com\/forms\/d\/(?!e\/)|\/edit(?:\?|["'])/.test(js), "no Google Form owner/edit URL is published");

const publicFormIds = [...js.matchAll(/1FAIpQL[A-Za-z0-9_-]+/g)].map(match => match[0]);
check(publicFormIds.length === 38, `all 38 canonical examinee form IDs are present (${publicFormIds.length})`);
check(new Set(publicFormIds).size === 38, "canonical form IDs are unique");

const localPaths = [...js.matchAll(/`(pdf\/(?:urdu|english)\/lecture-\$\{id\}\.pdf)`/g)];
check(localPaths.length >= 2, "local bilingual PDF templates are present");
for (const path of ["index.html", "assets/platform.js", "assets/platform.css", "vercel.json"]) {
  const info = await stat(new URL(path, import.meta.url));
  check(info.isFile() && info.size > 0, `${path} is available`);
}

if (process.argv.includes("--remote")) {
  const urls = publicFormIds.map(id => `https://docs.google.com/forms/d/e/${id}/viewform`);
  const results = await Promise.all(urls.map(async url => {
    try {
      const response = await fetch(url, { redirect: "follow" });
      return response.ok && response.url.includes("/viewform");
    } catch {
      return false;
    }
  }));
  check(results.every(Boolean), `${results.filter(Boolean).length}/${results.length} Google Forms resolve in examinee mode`);
}

process.exitCode = failures ? 1 : 0;
