import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
{/* Designs from './Components/Designs.jsx';*/}
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import PageTransition from './Components/PageTransition.jsx';

{/*const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Header />
            </PageTransition>
          } 
        />
        <Route 
          path="/About" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/Projects" 
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } 
        />
    {/* <Route 
          path="/Designs" 
          element={
            <PageTransition>
              <Designs />
            </PageTransition>
          } 
        />
        <Route 
          path="/Contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;*/}

const HomePage = () => {
  return (
    <PageTransition>
      {/* Scroll Sections */}
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </PageTransition>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* 🔵 CONTACT PAGE (separate) */}
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        {/* 🔵 OPTIONAL EXTRA PAGE */}
        {/* <Route
          path="/content"
          element={
            <PageTransition>
              <Content />
            </PageTransition>
          }
        /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;



