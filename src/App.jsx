import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import About from './components/About';
// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import StarsCanvas from "./components/StarsCanvas";
// import Tech from './components/Tech';
// import Works from './components/Works';

const App = () => {
  return (
    <BrowserRouter>
      <h1>dsadfdsf</h1>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar />
        <Hero />
      </div>
      {/* <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks /> */}
      <div className="relative z-0"> 
        {/* <Contact />
        <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
