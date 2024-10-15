// src/HelloReact.js

import React from 'react';
import './HelloReact.css'; // Import the CSS for styling

function HelloReact() {

  return (
    <div className="hello-react-container">
        <div className='hello-react'>
      <header className="header">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
        <button className="awesome-btn">Awesome!</button>
      </header>
      </div>
      

      <div className="features">
        <div className="feature">
          <img src="/icon1.png" alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature">
          <img src="/icon2.png" alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature">
          <img src="/icon3.png" alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="feature">
          <img src="/icon4.png" alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default HelloReact;