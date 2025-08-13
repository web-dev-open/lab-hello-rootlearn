import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Features />
      </main>
      <footer className="footer">Made with ❤ React</footer>
    </>
  );
}

export default App;
