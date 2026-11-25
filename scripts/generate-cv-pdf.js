const path = require("path");
const { mdToPdf } = require("md-to-pdf");

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
    await mdToPdf(
      { path: target.input },
      {
        dest: target.output,
        stylesheet: cssPath,
        pdf_options: {
          format: "A4",
          margin: "14mm 15mm 14mm 15mm",
          printBackground: true,
        },
      }
    );
    console.log("Generated:", target.output);
  }
}

buildPdfs().catch((err) => {
  console.error("Failed to generate CV PDFs:", err);
  process.exit(1);
});