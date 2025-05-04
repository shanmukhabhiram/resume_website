import React from 'react';
// import './Sidebar.css'; // optional if separating styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Abhiram</h2>
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" className="download-link" download>Download Resume</a>
      </nav>
    </div>
  );
};

export default Sidebar;