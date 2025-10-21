// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";


const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  const toggleDarkmode = () => setDarkmode(!darkmode);

  return (
    // 👇 This wrapper div controls the WHOLE page color
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkmode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar receives both props */}
      <Navbar darkmode={darkmode} toggleDarkmode={toggleDarkmode} />

      <main className="p-6">
        
      </main>
    </div>
  );
};

export default App;
