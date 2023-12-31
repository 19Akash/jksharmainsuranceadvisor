import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {BrowserView, MobileView} from 'react-device-detect';


function PdfView({pdf}) {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }
  return (
    <div style={{padding:"2%"}}>
      <BrowserView>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((x, i)=>i+1)
            .map(page => <Page pageNumber={page} width={520} scale={1.5}               
                renderAnnotationLayer={false} 
                renderTextLayer={false}/>)}
        </Document>
      </BrowserView>
      <MobileView>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
            .map((x, i)=>i+1)
            .map(page => <Page pageNumber={page} width={200} scale={1.5}               
                renderAnnotationLayer={false} 
                renderTextLayer={false}/>)}
        </Document>
      </MobileView>
    </div>
  );
}

export default PdfView;