import React from 'react'
import Profile from "./component/profile";
import "./App.css";
import Services from './component/services';
import { pdfjs } from 'react-pdf';
import Contact from './component/contact';
import ContactInfoPage from './component/contactInfoPage';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App = () => {
  return <div className='rootPage'>
         <Profile/>
         <Services/>
         <Contact/>
         <ContactInfoPage/>
    </div>
}

export default App;
