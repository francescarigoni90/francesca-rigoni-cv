const fs = require("fs");
const path = require("path");
const { mdToPdf } = require("md-to-pdf");

const ICONS = {
  location:
    '<svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>',
  phone:
    '<svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>',
  email:
    '<svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  linkedin:
    '<svg width="10" height="10" viewBox="0 0 24 24" fill="#ffffff"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
  briefcase:
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>',
  education:
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>',
  interests:
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 00-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 000-5z"/></svg>',
};

function inlineLinks(text) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function transformMarkdown(rawMd) {
  const [rawSidebar = "", rawMain = ""] = rawMd.split("<!-- MAIN -->");

  const transformBlock = (txt) =>
    txt
      .replace(/^\[role\]\s*(.+)$/gm, '<p class="sb-role">$1</p>')
      .replace(/^\[citizenship\]\s*(.+)$/gm, '<p class="sb-citizen">$1</p>')
      .replace(/^\[info:(\w+)\]\s*(.+)$/gm, (_, key, val) => {
        return `<div class="info-row"><span class="info-icon">${ICONS[key] || ""}</span><span>${inlineLinks(val)}</span></div>`;
      })
      .replace(/^\[bar:(\d+)\]\s*(.+?)\s*\|\s*(.+)$/gm, (_, pct, label, level) => {
        return `<div class="bar-item"><div class="bar-top"><span class="bar-name">${label}</span><span class="bar-level">${level}</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div></div>`;
      })
      .replace(/^\[sec:(\w+)\]\s*(.+)$/gm, (_, icon, title) => {
        return `<div class="sec-head"><span class="sec-icon">${ICONS[icon] || ""}</span><h2>${title}</h2><span class="sec-line"></span></div>`;
      })
      .replace(/^\[entry:([^\]]+)\]\s*$/gm, (_, dateStr) => {
        const formatted = dateStr.trim().replace(/\s*\/\s*/, "/<br/>");
        return `<div class="entry"><div class="entry-date">${formatted}</div><div class="entry-body">\n`;
      })
      .replace(/^\[\/entry\]\s*$/gm, "\n</div></div>\n");

  return [
    '<div class="cv-page">',
    '<aside class="sidebar">\n',
    transformBlock(rawSidebar),
    "\n</aside>",
    '<main class="main">\n',
    transformBlock(rawMain),
    "\n</main>",
    "</div>",
  ].join("\n");
}

const targets = [
  {
    input: path.join(__dirname, "../public/cv-en.md"),
    output: path.join(__dirname, "../public/Francesca_Rigoni_CV_EN.pdf"),
  },
  {
    input: path.join(__dirname, "../public/cv-it.md"),
    output: path.join(__dirname, "../public/Francesca_Rigoni_CV_IT.pdf"),
  },
];

async function buildPdfs() {
  const cssPath = path.join(__dirname, "cv-pdf.css");

  for (const target of targets) {
    const rawMd = fs.readFileSync(target.input, "utf8");
    const processedMd = transformMarkdown(rawMd);

    await mdToPdf(
      { content: processedMd },
      {
        dest: target.output,
        stylesheet: cssPath,
        pdf_options: {
          format: "A4",
          margin: "0mm",
          printBackground: true,
        },
      }
    );
    console.log("Generated 1-page PDF:", target.output);
  }
}

buildPdfs().catch((err) => {
  console.error("Failed to generate CV PDFs:", err);
  process.exit(1);
});