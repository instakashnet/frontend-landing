import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export const MultiPages = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <Document file={pdf} options={{ workerSrc: "/pdf.worker.js" }} onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};
