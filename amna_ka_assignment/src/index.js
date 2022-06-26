import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Resume from './Components/resume';
import Ending from './Components/ending';
import Top from './Components/top';
// import Servicess from './Components/services';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Top/>
   <Navbar/>
   <Hero/>
   <AboutMe/>
   <Skills/>
   <Resume/>
   <Ending/>
   
   {/* <Servicess/> */}
  </React.StrictMode>
);

reportWebVitals();
