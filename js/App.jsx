// src/App.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Experience from "./Experience";
import "./App.css";
function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (<div className="app">
      <header className="App-header">
        <Navbar onPageChange={handlePageChange}/>
      </header>
      <main>
        {currentPage === "home" && (<section id="about-me">
            <h1>Hi there, I'm Mohammed Fatheen Ahmed</h1>
            <p>
              Welcome to my website! I am a Freshman in CS and Statistics 🖥📈@
              UIUC📚.
            </p>
          </section>)}
        {currentPage === "about" && <AboutMe />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "experience" && <Experience />}
        {/* Add other sections as needed */}
      </main>
    </div>);
}
export default App;
