import React from 'react'
import Profile from "./component/profile";
import "./App.css";
import Services from './component/services';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App = () => {
  return <div className='rootPage'>
         <Profile/>
         <Services/>
    </div>
}

export default App;
