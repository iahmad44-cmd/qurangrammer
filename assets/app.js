const lessons = [
  { id: "01", number: "1", urTitle: "حرکات، ہمزہ و الف، حروفِ الھجاء", urTopics: "حرکاتِ ثلاثہ، سکون، تنوین، تشدید، مد؛ ہمزہ اور الف کا فرق؛ اٹھائیس حروف اور کھڑی حرکات", enTitle: "Harakaat, Hamzah and Alif, Huroof ul Hijaa'", enTopics: "The three harakaat, sukoon, tanween, tashdeed and madd; the difference between Hamzah and Alif; the 28 letters and the standing vowels", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "02", number: "2", urTitle: "لفظ اور کلمہ کی اقسام", urTopics: "لفظ، مہمل و کلمہ؛ اسم، فعل اور حرف؛ ان کی علامات؛ جملۂ اسمیہ و فعلیہ؛ تائے دراز و مربوطہ", enTitle: "Lafz and the categories of Kalimah", enTopics: "Lafz, Muhmal and Kalimah; Ism, Fi'l and Harf with their alamaat; Jumla Ismiyyah and Fi'liyyah; Taa' Daraz and Taa' Marbutah", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "03", number: "3", urTitle: "اسم کا تعارف", urTopics: "اسم کی تعریف؛ ضمیر و صفت؛ رنگ، اسم الفاعل و المفعول، مبالغہ، تفضیل؛ اسم کی علامات اور اقسام", enTitle: "Introduction to the Ism", enTopics: "The definition of Ism; Dameer and Sifah; colours, Ism ul Fa'il and Maf'ul, Mubalaghah, Tafdeel; the marks and categories of the Ism", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "04", number: "4", urTitle: "اسم کی جنس — مذکر و مؤنث", urTopics: "حقیقی و غیر حقیقی جنس؛ مؤنث کی اقسام؛ علاماتِ تانیث؛ حروفِ اصلی؛ سماعی مؤنث اور مشترک اسماء", enTitle: "The gender of the Ism", enTopics: "Real and unreal gender; the categories of Mu'annath; the marks of ta'neeth; Huroof Asliyyah; the Sama'i Mu'annath and shared nouns", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "05", number: "5", urTitle: "مذکر سے مؤنث بنانے کا طریقہ", urTopics: "جنس پہچاننے کا عملی طریقہ؛ گول ۃ کا قاعدہ؛ صفت و موصوف کی مطابقت؛ الوان و عیوب؛ اسمِ تفضیل", enTitle: "Forming the Mu'annath from the Mudhakkar", enTopics: "A practical method for gender; the round taa' rule; Sifah–Mawsuf agreement; Alwan and 'Uyub; the Ism ut Tafdeel", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "06", number: "6", urTitle: "عدد — واحد سے مثنّٰى بنانا", urTopics: "تثنیہ کا قاعدہ اور اعراب؛ الفِ ممدودہ و مقصورہ؛ ملحقاتِ تثنیہ؛ قاعدۂ تغلیب؛ مثنیٰ کی پہچان", enTitle: "'Adad — forming the Tathniyah", enTopics: "The rule and I'raab of the Tathniyah; Alif Mamdudah and Maqsurah; the Mulhaqaat; the rule of Taghleeb; recognising a Tathniyah", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "07", number: "7", urTitle: "جمع کی اقسام", urTopics: "جمع سالم و مکسر؛ حروفِ اصلی اور اوزان؛ پندرہ مشہور اوزان؛ جمع قلت و کثرت؛ منتہى الجموع؛ اسم جمع", enTitle: "The categories of Jam'", enTopics: "Jam' Salim and Mukassar; roots and patterns; fifteen well-known patterns; Jam' Qillah and Kathrah; Muntaha al-Jumoo'; Ism ul Jam'", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "08", number: "8", urTitle: "جمع سالم — مذکر و مؤنث", urTopics: "جمع سالم مذکر کی شرائط اور استثناءات؛ جمع سالم مؤنث؛ اسمِ منقوص اور اسمِ مقصور کی تثنیہ و جمع", enTitle: "Jam' Salim — Mudhakkar and Mu'annath", enTopics: "Conditions and exceptions of the Jam' Salim Mudhakkar; the Jam' Salim Mu'annath; the Ism Manqus and Ism Maqsur in dual and plural", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "09", number: "9", urTitle: "وسعت — معرفہ اور نکرہ", urTopics: "معرفہ کی سات اقسام؛ ضمائر، اسمائے اشارہ و موصولہ کے جدول؛ قمری و شمسی حروف؛ الاستغراق", enTitle: "Wus'at — Ma'rifah and Nakirah", enTopics: "The seven categories of Ma'rifah; tables of Dama'ir, Isharah and Mawsulah; Qamari and Shamsi letters; al-Istighraq", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "10", number: "10", urTitle: "اعراب کا تعارف", urTopics: "اعراب کی تعریف اور محلِ اعراب؛ رفع، نصب و جر؛ اعراب بالحرکۃ و بالحرف؛ اعرابِ اصلی، فرعی اور تقدیری", enTitle: "Introduction to I'raab", enTopics: "The definition of I'raab and Mahall ul I'raab; raf', nasb and jarr; I'raab bil Harakah and bil Harf; I'raab Asli, Far'i and Taqdeeri", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "11", number: "11", urTitle: "معرب غیر منصرف اسماء", urTopics: "معرب و مبنی؛ منصرف و غیر منصرف؛ سولہ گروپ؛ اور آخر میں اسبابِ منع الصرف کی مکمل تفصیل", enTitle: "Mu'rab Ghayr Munsarif nouns", enTopics: "Mu'rab and Mabni; Munsarif and Ghayr Munsarif; sixteen groups; and at the end, the full detail of the Asbab Man' as-Sarf", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "12", number: "12", urTitle: "مثنّٰى اور جمع سالم کا اعراب", urTopics: "اعراب بالحرف؛ مثنیٰ و جمع سالم کے اعراب؛ اسمائے ستہ؛ اضافت میں نون کا گرنا؛ سی این جی ٹیسٹ", enTitle: "The I'raab of Tathniyah and Jam' Salim", enTopics: "I'raab bil Harf; the I'raab of the Tathniyah and Jam' Salim; the Asma' Sittah; the dropping of the noon; the CNG test", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "13-14", number: "13–14", urTitle: "جملۂ اسمیہ — مبتدا اور خبر", urTopics: "مفرد و مرکب؛ جملے کی اقسام؛ مبتدا و خبر کی چار شرائط؛ خبر مفرد و جملہ؛ خبرِ مقدم و مبتدأِ مؤخر", enTitle: "Jumla Ismiyyah — Mubtada and Khabar", enTopics: "Mufrad and Murakkab; kinds of sentence; the four conditions; Khabar Mufrad and Jumlah; Khabar Muqaddam and Mubtada Mu'akhkhar", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "15", number: "15", urTitle: "معرف باللام مبتدا", urTopics: "مبتدا و خبر کی تین شرائط؛ اسمِ علم بطور مبتدا؛ معرف باللام؛ اِمْرَأَة اور اِمْرُؤ؛ ہمزۃ الوصل والے اسماء", enTitle: "The Mu'arraf bil Lam as Mubtada", enTopics: "The three conditions; the Ism ul 'Alam as Mubtada; the Mu'arraf bil Lam; Imra'ah and Imru'; nouns with the Hamzat ul Wasl", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "16", number: "16", urTitle: "ایک مبتدا کی متعدد خبریں", urTopics: "اوزانِ فَعُوْل و فَعِيْل؛ صیغِ مبالغہ؛ اردو و عربی کی جنس کا فرق؛ عاقل و غیر عاقل؛ جمع غیر عاقل کی خبر", enTitle: "Several Khabars for one Mubtada", enTopics: "The patterns Fa'ool and Fa'eel; Siyagh ul Mubalaghah; gender differences between Urdu and Arabic; 'Aqil and Ghayr 'Aqil; the Khabar of a Ghayr 'Aqil plural", files: { ur: { pdf: true }, en: { pdf: true } } },
  { id: "17", number: "17", urTitle: "اسمائے اشارہ بطور مبتدا", urTopics: "اسمائے اشارہ کے جدول؛ ہائے تنبیہ؛ غیر عاقل کی جمع؛ ذٰلِكَ الْكِتَابُ کی بلاغت؛ کافِ خطاب", enTitle: "Asma' ul Isharah as Mubtada", enTopics: "Tables of the Asma' ul Isharah; the Haa' ut Tanbeeh; plurals of the Ghayr 'Aqil; the rhetoric of Dhalika al-Kitab; the Kaf ul Khitab", files: { ur: { pdf: true, docx: true }, en: { pdf: true, docx: true } } }
];

const copy = {
  ur: { description: "عربی قواعد کے تفصیلی مطالعے کے نوٹس · اسباق ۱ تا ۱۷", overline: "سنجیدہ مطالعے کے لیے منظم ذخیرہ", kicker: "مطالعہ کا ذخیرہ", title: "تمام اسباق", intro: "قرآنی عربی کی زبان، ساخت اور بلاغت کا تدریجی نصاب۔", label: "اسباق تلاش کریں", placeholder: "عنوان یا موضوع لکھیں…", pdf: "پی ڈی ایف کھولیں", docx: "ورڈ فائل", unavailable: "جلد دستیاب", found: n => `${n.toLocaleString("ur-PK")} اسباق`, empty: "کوئی سبق نہیں ملا۔", footer: "اے میرے رب، میرے علم میں اضافہ فرما۔", about: "عربی کے طلبہ کے لیے دو لسانی مطالعاتی ذخیرہ۔", stats: ["اسباق", "زبانیں", "آن لائن مطالعہ", "آف لائن مطالعہ"], formats: "پی ڈی ایف اور قابلِ تدوین نوٹس", note: "", ariaPdf: n => `سبق ${n} کی پی ڈی ایف کھولیں`, ariaDocx: n => `سبق ${n} کی ورڈ فائل ڈاؤن لوڈ کریں` },
  en: { description: "Detailed study notes on Arabic grammar · Lessons 1–17", overline: "A structured library for serious study", kicker: "Study library", title: "All lessons", intro: "A progressive course in the language, structure and eloquence of Quranic Arabic.", label: "Search lessons", placeholder: "Search by title or topic…", pdf: "Open PDF", docx: "Word file", unavailable: "Coming soon", found: n => `${n} lesson${n === 1 ? "" : "s"}`, empty: "No lessons found.", footer: "My Lord, increase me in knowledge.", about: "A bilingual study archive for students of Arabic.", stats: ["Lectures", "Languages", "Read online", "Study offline"], formats: "PDF and editable notes", note: "", ariaPdf: n => `Open lesson ${n} as PDF`, ariaDocx: n => `Download lesson ${n} as a Word file` }
};

let language = localStorage.getItem("quranGrammarLanguage") === "en" ? "en" : "ur";
const list = document.querySelector("#lessons");
const search = document.querySelector("#search");

function render() {
  const t = copy[language];
  const query = search.value.trim().toLocaleLowerCase(language === "ur" ? "ur" : "en");
  const filtered = lessons.filter(lesson => `${lesson[`${language}Title`]} ${lesson[`${language}Topics`]}`.toLocaleLowerCase().includes(query));
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  list.dir = language === "ur" ? "rtl" : "ltr";
  list.innerHTML = "";

  filtered.forEach(lesson => {
    const file = { ...(lesson.files[language] || {}), docx: language === "ur" || lesson.files[language]?.docx };
    const item = document.createElement("li");
    item.className = "lesson-card";
    item.innerHTML = `
      <div class="lesson-number"><span>${language === "ur" ? "سبق" : "Lesson"}</span><strong>${lesson.number}</strong></div>
      <div class="lesson-copy"><h3>${lesson[`${language}Title`]}</h3><p>${lesson[`${language}Topics`]}</p></div>
      <div class="lesson-actions">
        ${file.pdf ? `<a class="button primary" href="pdf/${language === "ur" ? "urdu" : "english"}/lecture-${lesson.id}.pdf" target="_blank" rel="noopener noreferrer" aria-label="${t.ariaPdf(lesson.number)}">${t.pdf}</a>` : `<span class="button disabled" aria-disabled="true">${t.unavailable}</span>`}
        ${file.docx ? `<a class="button secondary" href="docx/${language === "ur" ? "urdu" : "english"}/lecture-${lesson.id}.docx" download aria-label="${t.ariaDocx(lesson.number)}">${t.docx}</a>` : ""}
      </div>`;
    list.appendChild(item);
  });

  document.querySelector("#site-description").textContent = t.description;
  document.querySelector("#hero-overline").textContent = t.overline;
  document.querySelector("#library-kicker").textContent = t.kicker;
  document.querySelector("#library-title").textContent = t.title;
  document.querySelector("#library-intro").textContent = t.intro;
  document.querySelector("#search-label").textContent = t.label;
  document.querySelector("#search").placeholder = t.placeholder;
  document.querySelector("#result-count").textContent = t.found(filtered.length);
  document.querySelector("#empty-state").textContent = t.empty;
  document.querySelector("#empty-state").hidden = filtered.length !== 0;
  document.querySelector("#availability-note").textContent = t.note;
  document.querySelector("#availability-note").hidden = !t.note;
  document.querySelector("#footer-text").textContent = t.footer;
  document.querySelector("#footer-about").textContent = t.about;
  document.querySelector("#format-key").lastChild.textContent = ` ${t.formats}`;
  ["#stat-lessons", "#stat-languages", "#stat-read", "#stat-download"].forEach((selector, index) => document.querySelector(selector).textContent = t.stats[index]);
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => {
  language = button.dataset.lang;
  localStorage.setItem("quranGrammarLanguage", language);
  search.value = "";
  render();
}));
search.addEventListener("input", render);
render();
