import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function CvDownloadAndViewer() {
  const [markdown, setMarkdown] = useState("");
  const mdUrl = `${process.env.PUBLIC_URL}/cv-en.md`;
  const pdfUrl = `${process.env.PUBLIC_URL}/Francesca_Rigoni_CV_EN.pdf`;

  useEffect(() => {
    fetch(mdUrl)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch((err) => console.error("Error loading CV markdown:", err));
  }, [mdUrl]);

  return (
    <div>
      <a
        href={pdfUrl}
        download="Francesca_Rigoni_CV_EN.pdf"
        className="cv-download-btn"
      >
        Download my CV (PDF)
      </a>

      <article className="cv-markdown-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
}