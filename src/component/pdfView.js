import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {BrowserView, MobileView} from 'react-device-detect';


function PdfView({pdf}) {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }
  console.log("window", window.innerWidth)
  return (
    <div style={{padding:"2%"}}>
      <BrowserView>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((x, i)=>i+1)
            .map(page => <Page pageNumber={page} width={500} scale={1.5}               
                renderAnnotationLayer={false} 
                renderTextLayer={false}/>)}
        </Document>
      </BrowserView>
      <MobileView>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((x, i)=>i+1)
            .map(page => <Page pageNumber={page} width={170} scale={1.5}               
                renderAnnotationLayer={false} 
                renderTextLayer={false}/>)}
        </Document>
      </MobileView>
    </div>
  );
}

export default PdfView;