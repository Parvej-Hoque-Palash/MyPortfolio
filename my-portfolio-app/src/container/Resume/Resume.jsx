import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Document, Page, pdfjs } from "react-pdf";
import MyResume from "../assets/resume.pdf";
import "./Resume.css";

// Configure the worker to load pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleDownload = () => {
    saveAs(MyResume, "resume.pdf");
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume__page">
        <div className="resume__card1">
          <h2>Download PDF</h2>
          <button onClick={handleDownload}>
            <div className="download__btn">
              <div className="download__pdf">Download</div>
              <span className="material-symbols-outlined download__icon">
                cloud_download
              </span>
            </div>
          </button>
        </div>
        <div className="resume__card2">
          <h2>Display PDF</h2>
          <Document file={MyResume} onLoadSuccess={({ numPages }) => setPageNumber(numPages)}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
