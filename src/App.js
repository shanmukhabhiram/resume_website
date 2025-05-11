import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import AdminViews from './components/AdminViews';

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
      {/* <Portfolio /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin-views" element={<AdminViews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;