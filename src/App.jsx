import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import PageTransition from './Components/Pagetransition.jsx';

const App = () => {
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

export default App;



