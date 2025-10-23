import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from './components/About';


const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  const toggleDarkmode = () => setDarkmode(!darkmode);

  return (
    <Router>
      <div
       // This wrapper div controls the WHOLE page color
        className={`min-h-screen mx-auto px-6 transition-all duration-300 ${
          darkmode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"
        }`}
      >
        {/* Navbar receives both props */}
        <Navbar darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
        <Routes>
          {/* Other components can go here */}
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>

        
      </div>
    </Router>
   
  );
};

export default App;
