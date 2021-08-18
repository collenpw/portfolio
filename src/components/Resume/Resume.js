import { Document, Page, pdfjs } from "react-pdf";

import document from './Resume.pdf'

const Resume = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
    return (
     
            <>
            <div className="resume">
              <Document 
                file= {document}
                >
                    <Page  pageNumber ={1} />
              </Document>
             <a href={document} download>Download resume</a>
             </div>
            </>

    );
};

export default Resume;