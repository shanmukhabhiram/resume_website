import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="app">
      {/* <Sidebar />
      <div className="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div> */}\
      <Portfolio />
    </div>
  );
}

export default App;