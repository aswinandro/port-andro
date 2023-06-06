import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/canvas/Stars";
import Spotify from "./components/Spotify";
import Tech from "./components/Tech";
import Works from "./components/Works";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar />

        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Hero />

          <About />
          <Experience />

          <Works />
          <Tech />
          <Spotify />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
