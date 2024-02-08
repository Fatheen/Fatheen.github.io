// src/App.jsx
import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <section id="about-me">
          <h1>Hi there, I'm Mohammed Fatheen Ahmed</h1>
          <p>CS and Statistics @ UIUC</p>
        </section>
      </main>
    </div>
  );
}

export default App;
