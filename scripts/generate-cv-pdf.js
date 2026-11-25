const path = require("path");
const { mdToPdf } = require("md-to-pdf");

async function buildPdf() {
  const inputMd = path.join(__dirname, "../public/cv-en.md");
  const outputPdf = path.join(__dirname, "../public/Francesca_Rigoni_CV_EN.pdf");
  const cssPath = path.join(__dirname, "cv-pdf.css");

  await mdToPdf(
    { path: inputMd },
    {
      dest: outputPdf,
      stylesheet: cssPath,
      pdf_options: {
        format: "A4",
        margin: "14mm 15mm 14mm 15mm",
        printBackground: true,
      },
    }
  );

  console.log("Generated:", outputPdf);
}

buildPdf().catch((err) => {
  console.error("Failed to generate CV PDF:", err);
  process.exit(1);
});