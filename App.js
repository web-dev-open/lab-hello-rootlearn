import React from "react";
import "./App.css";

export default function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="upper-content">
          <div className="left-content">
            <h1>Say hello to React JS</h1>
            <p className="sub-text">
              You will learn a frontend framework from scratch to become a Ninja
              Developer
            </p>
            <button className="awesome-btn">Awesome</button>
          </div>
        </div>
      </header>
      <div className="lower-content">
        <div className="logo-container">
          <div className="react-logo-background" />
        </div>
      </div>
      <div className="bottom-content">
        <div className="logos-container">
          <img src="https://imgur.com/H2L3ohY.png" alt="icon1" />
          <img src="https://imgur.com/IHW1mFB.png" alt="icon2" />
          <img src="https://imgur.com/LtUDB9y.png" alt="icon3" />
          <img src="https://imgur.com/agN6R4Y.png" alt="icon4" />
        </div>
      </div>
    </div>
  );
