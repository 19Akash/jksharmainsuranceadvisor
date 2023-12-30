import React from 'react'
import Profile from "./component/profile";
import "./App.css";
import Services from './component/services';

const App = () => {
  return <div className='rootPage'>
         <Profile/>
         <Services/>
    </div>
}

export default App;
