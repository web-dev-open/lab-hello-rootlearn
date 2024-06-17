
import React from 'react';
import './LandingPage.css';
import icon1 from './assets/logo(5).png';
import icon2 from './assets/icon(2).png';
import icon3 from './assets/icon(3).png';
import icon4 from './assets/icon(4).png';
import { ReactComponent as ReactLogo } from './logo.svg'; 
function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <ReactLogo className="landing-logo" />
        <h1>Welcome to Our React App</h1>
      </header>
      <section className="features">
        <div className="feature">
          <img src={icon1} alt="Feature 1" />
          <h3>Feature One</h3>
          <p>Description for feature one.</p>
        </div>
        <div className="feature">
          <img src={icon2} alt="Feature 2" />
          <h3>Feature Two</h3>
          <p>Description for feature two.</p>
        </div>
        <div className="feature">
          <img src={icon3} alt="Feature 3" />
          <h3>Feature Three</h3>
          <p>Description for feature three.</p>
        </div>
        <div className="feature">
          <img src={icon4} alt="Feature 4" />
          <h3>Feature Four</h3>
          <p>Description for feature four.</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
