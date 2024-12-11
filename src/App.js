import React from "react";
import "./App.css";

// Importing icons
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App" >
      <div className="main">
        <h1 className="intro">Say hello to ReactJS</h1>
        <h3 className="desc">
          You will learn a Frontend framework from scratch, to become a Ninka Developer.
        </h3>
        <button className="awesome">Awesome!</button>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <img src={icon1} alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature">
          <img src={icon2} alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature">
          <img src={icon3} alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="feature">
          <img src={icon4} alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
