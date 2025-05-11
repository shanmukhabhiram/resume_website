// import React from 'react';
// import './Portfolio.css'; // Import the CSS file

// function Portfolio() {
//     return (
//         <div className="portfolio">
//             <aside className="sidebar">
//                 <div className="profile-image">
//                     {/* Background image set in CSS */}
//                 </div>
//                 <nav className="navigation">
//                     <ul>
//                         <li><a href="#about">About</a></li>
//                         <li><a href="#experience">Experience</a></li>
//                         <li><a href="#projects">Projects</a></li>
//                         <li><a href="#contact">Contact</a></li>
//                     </ul>
//                 </nav>
//             </aside>

//             <main className="content">
//                 <section id="about" className="section">
//                     <h2>About Me</h2>
//                     <div className="objective">
//                         <h3>Objective</h3>
//                         <p>A engineer with curiosity and interest in the field of technology in both software and electronics and fast learner with good discipline and clear ideology.</p>
//                     </div>
//                     <div className="profile">
//                         <h3>Profile</h3>
//                         <p>Had Two Years Experience in Backend Development at Trace Technologies</p>
//                         <p>Known Technologies are:
//                             <ul className="tech-list">
//                                 <li>#c</li>
//                                 <li>c++</li>
//                                 <li>java</li>
//                                 <li>python</li>
//                                 <li>html</li>
//                                 <li>css</li>
//                                 <li>javascript</li>
//                                 <li>sql</li>
//                                 <li>docker</li>
//                                 <li>apache server</li>
//                                 <li>FLASK</li>
//                                 <li>React JS</li>
//                                 <li>React Native</li>
//                                 <li>Arduino uno</li>
//                                 <li>Esp32</li>
//                                 <li>Raspberry Pi</li>
//                             </ul>
//                         </p>
//                         <p>The ability to analyse complex technical information.</p>
//                         <p>Knowledge in working with Arduino uno, Esp32, and Raspberry Pi.</p>
//                         <p>Can analyse, design and implement database and code structures.</p>
//                         <p>Detail oriented.</p>
//                         <p>Excellent problem solver.</p>
//                         <p>Possess good leadership skills.</p>
//                         <p>Good and fast learner.</p>
//                     </div>
//                 </section>

//                 <section id="experience" className="section">
//                     <h2>Work Experience</h2>
//                     <div className="experience-item">
//                         <h3>Backend Developer</h3>
//                         <p><strong>Trace Technologies</strong></p>
//                         <p>February 2022 - March 2025</p>
//                         <p>Technologies Used: Flask, MySQL, PostgreSQL, MongoDB, Excel Macros</p>
//                         <ul>
//                             <li>Developed and maintained backend systems and APIs, with a focus on database-driven applications.</li>
//                             <li>Built admin systems from scratch, including modules for CRUD operations and bulk data processing via Excel templates.</li>
//                             <li>Utilized Macros for automated data entry and validation within Excel templates.</li>
//                             <li>Worked across multiple databases including MySQL, PostgreSQL, and MongoDB to support scalable, high-performance applications.</li>
//                         </ul>
//                     </div>

//                     <div className="experience-item">
//                         <h3>Freelance Backend & Frontend Developer</h3>
//                         <p><strong>ByteNode</strong></p>
//                         <p>...</p>
//                     </div>
//                 </section>

//                 <section id="projects" className="section">
//                     <h2>Projects</h2>
//                     <div className="project-item">
//                         <h3>Real-time Face Mask Detection and Gender Prediction</h3>
//                         <p><strong>Technologies:</strong> Python, OpenCV, TensorFlow, Keras, Matplotlib</p>
//                         <p><strong>Description:</strong> Developed two Python scripts. The first script trains a CNN model to classify masked and unmasked faces and predict gender. The training script also generates accuracy and loss charts using Matplotlib, allowing visualization of the models performance. The second file loads the trained model and uses OpenCV to detect a face from the webcam feed. The detected face is cropped and then passed to the model, which predicts the gender based on the trained data.</p>
//                     </div>

//                     <div className="project-item">
//                         <h3>Encrypted connection to send server or computer details by using sockets</h3>
//                         <p><strong>Technologies:</strong> Python</p>
//                         <p><strong>Description:</strong> This project was developed to remotely monitor and transmit system information such as RAM usage, CPU usage, GPU usage, system uptime, available storage, operating system, and system architecture. The data transmission is secured through encryption to ensure safe communication between systems. The project utilizes several Python libraries, including platform, time, datetime, psutil, subprocess, shlex, requests, ctypes, threading, and socket. The program runs continuously, collecting and sending system data every five minutes to a client application running on a separate device. On the client side, the received data is decrypted and displayed, providing real-time system monitoring capabilities.</p>
//                     </div>
//                 </section>

//                 <section id="contact" className="section">
//                     <h2>Contact</h2>
//                     <p><strong>Mobile:</strong> 8978848966</p>
//                     <p><strong>Email:</strong> shanmukhabhiram7@gmail.com</p>
//                 </section>
//             </main>

//             <footer className="footer">
//                 <p>&copy; 2025 Arani Shanmukh Abhiram</p>
//             </footer>
//         </div>
//     );
// }

// export default Portfolio;

import React from 'react';
import './Portfolio.css';

function Portfolio() {
    useEffect(() => {
        const logVisit = async () => {
        try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            const visit = {
            ip: data.ip,
            region: data.region,
            country: data.country_name,
            timezone: data.timezone,
            regionTime: new Date().toLocaleString("en-US", { timeZone: data.timezone }),
            indiaTime: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
            timestamp: new Date().toISOString(),
            };

            let visits = JSON.parse(localStorage.getItem("viewLogs")) || [];
            visits.push(visit);
            localStorage.setItem("viewLogs", JSON.stringify(visits));
        } catch (err) {
            console.error("Failed to log visit:", err);
        }
        };

        logVisit();
    }, []);
    
    return (
        <div className="portfolio">
            <aside className="sidebar">
                <div className="profile-image"></div>
                <nav className="navigation">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </aside>

            <main className="content">
                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>
                        A highly curious and disciplined engineer with experience in both software and electronics.
                        Strong backend developer with fullstack capabilities, known for problem solving and fast learning.
                    </p>
                    <ul className="tech-list">
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                        <li>Flask</li>
                        <li>React JS</li>
                        <li>React Native</li>
                        <li>Docker</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Apache Server</li>
                        <li>Arduino Uno</li>
                        <li>ESP32</li>
                        <li>Raspberry Pi</li>
                    </ul>
                </section>

                <section id="experience" className="section">
                    <h2>Work Experience</h2>
                    <div className="experience-item">
                        <h3>Backend Developer</h3>
                        <p><strong>Trace Technologies</strong></p>
                        <p>February 2022 - March 2025</p>
                        <ul>
                            <li>Developed admin systems from scratch including APIs for CRUD and bulk operations via Excel.</li>
                            <li>Implemented Excel Macros for template generation and validation.</li>
                            <li>Built performance reporting APIs, alert systems, and automation scripts using Python.</li>
                            <li>Worked with MySQL, PostgreSQL, and MongoDB.</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Fullstack Developer (Freelancer)</h3>
                        <p><strong>ByteNode</strong></p>
                        <p>December 2023 - Present</p>
                        <ul>
                            <li>Developed Flask APIs and React frontend for EV dashboard, water meter management, and IoT motor control.</li>
                            <li>Built reporting and billing systems with PDF export.</li>
                            <li>Handled both frontend and backend for water meter systems and tenant management.</li>
                        </ul>
                    </div>
                </section>

                <section id="projects" className="section">
                    <h2>Projects</h2>

                    <h3>Work Projects</h3>
                    <div className="project-item">
                        <h4>Admin System (Trace Technologies)</h4>
                        <p>Created full admin systems, bulk CRUD APIs, and validation from Excel templates using Flask and MySQL/PostgreSQL.</p>
                    </div>
                    <div className="project-item">
                        <h4>EV Dashboard APIs (ByteNode)</h4>
                        <p>Flask backend for fetching and presenting vehicle metrics like speed, battery, and location data.</p>
                    </div>
                    <div className="project-item">
                        <h4>Water Meter System</h4>
                        <p>Fullstack system to manage meter data, tenants, generate reports and water bills in PDF format.</p>
                    </div>
                    <div className="project-item">
                        <h4>IoT Motor Controller for Irrigation</h4>
                        <p>ESP32-based motor controller using MQTT and Flask for remote irrigation management, Wi-Fi setup UI, and SSR relay integration.</p>
                    </div>
                    <div className="project-item">
                        <h4>Alert System (Trace & SafeAir)</h4>
                        <p>Automated Python system to generate alerts based on database triggers, using HTML templates and email notifications.</p>
                    </div>

                    <h3>Personal Projects</h3>
                    <div className="project-item">
                        <h4>Voice Assistant Prototype</h4>
                        <p>Built with Python using gTTS, Selenium, and BeautifulSoup for weather and Wikipedia search voice responses.</p>
                    </div>
                    <div className="project-item">
                        <h4>Object Following & Obstacle Avoiding Robot</h4>
                        <p>Raspberry Pi & OpenCV based robot that follows colored objects and avoids obstacles using ultrasonic sensors.</p>
                    </div>
                    <div className="project-item">
                        <h4>Gender Detection using AI</h4>
                        <p>Deep learning model with TensorFlow and OpenCV to detect and predict gender using webcam face input.</p>
                    </div>
                    <div className="project-item">
                        <h4>Encrypted System Monitoring Tool</h4>
                        <p>Python client-server tool that securely transmits CPU, RAM, and storage info using sockets and encryption.</p>
                    </div>
                    <div className="project-item">
                        <h4>Flask Chat App</h4>
                        <p>Flask and MySQL based login and chat app with session management and persistent user authentication.</p>
                    </div>
                </section>

                <section id="contact" className="section">
                    <h2>Contact</h2>
                    {/* <p><strong>Mobile:</strong> 8978848966</p> */}
                    <p><strong>Email:</strong> shanmukhabhiram7@gmail.com</p>
                    {/* <a href="/Arani Shanmukh Abhiram Resume.pdf" download className="download-resume">Download Resume</a> */}
                    <button 
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = process.env.PUBLIC_URL + '/Arani Shanmukh Abhiram Resume.pdf';
                            link.download = 'Arani_Shanmukh_Abhiram_Resume.pdf';
                            link.click();
                        }}
                        className="download-resume-button"
                        >
                        Download Resume
                    </button>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2025 Arani Shanmukh Abhiram</p>
            </footer>
        </div>
    );
}

export default Portfolio;