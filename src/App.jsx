import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Background from "./Components/Background.jsx";
import PageTransition from "./Components/PageTransition.jsx";

const HomePage = () => {
  return (
    <PageTransition>
      <Header />
      <About />
      <Projects />
    </PageTransition>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      {/* ✅ Background must be FIRST */}
      <Background />

      <Routes>

        {/* 🟢 MAIN SCROLL PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* 🔵 CONTACT PAGE */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

      </Routes>

      {/* 🔻 FOOTER GLOBAL */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;