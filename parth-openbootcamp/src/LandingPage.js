// LandingPage.js
import React from 'react';
import ReactLogo from './components/ReactLogo';
import './styles/LandingPage.css';

const iconData = [
  { img: 'https://imgur.com/H2L3ohY.png', name: 'Declarative', description: 'Description for Icon 1' },
  { img: 'https://imgur.com/IHW1mFB.png', name: 'Components', description: 'Description for Icon 2' },
  { img: 'https://imgur.com/LtUDB9y.png', name: 'Single-Way', description: 'Description for Icon 3' },
  { img: 'https://imgur.com/agN6R4Y.png', name: 'JSX', description: 'Description for Icon 4' },
];

const LandingPage = () => (
  <div>
    <div className="logo-container">
      <ReactLogo />
    </div>
    <h1>Welcome to Your App!</h1>
    <div className="icons-container">
      {iconData.map(({ img, name, description }, index) => (
        <div key={index} className="icon">
          <img src={img} alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default LandingPage;
