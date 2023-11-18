import React, { useEffect } from 'react';
import './App.css';

const drawLogo = (context, width, height, x, y) => {
  const image = new Image();
  image.src = '/react-logo.svg';
  image.onload = () => {
    context.drawImage(image, x, y, width, height);
  };
};

function App() {
  useEffect(() => {
    const canvas = document.getElementById('logo-canvas');
    const context = canvas.getContext('2d');

    drawLogo(context, 170, 60, 0, -10);
    drawLogo(context, 140, 45, 75, 53);
    drawLogo(context, 155, 50, 0, 100);
    drawLogo(context, 80, 30, 250, 20);
    drawLogo(context, 80, 30, 250, 60);
    drawLogo(context, 80, 30, 250, 100);

  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="App">
      <header className='App-header' >
        <div className='header-content'>
          <h1>Say hello to<br/>ReactJS</h1>
          <p>You will learn a Frontend<br/>framework from scratch, to <br/>become a Ninja Developer.</p>
          <button className='btn'>Awesome!</button>        
        </div>
        <div className='canvas-container'>
          <canvas id="logo-canvas" className="App-logo-canvas" />
        </div>
      </header>
      <section className="footer">
      <div className="feature">
        <img src="https://imgur.com/H2L3ohY.png" alt="" />
        <h1>Declarative</h1>
        <p>React makes it <br/> painless to create <br/> interactive UIs.</p>
      </div>
      <div className="feature">
        <img src="https://imgur.com/IHW1mFB.png" alt="" />
        <h1>Components</h1>
        <p>Build encapsulated <br/> components that <br/> manage their state.</p>
      </div>
      <div className="feature">
        <img src="https://imgur.com/LtUDB9y.png" alt="" />
        <h1>Single-Way</h1>
        <p>A set of immutable <br/> values is passed to <br/> the component's.</p>
      </div>
      <div className="feature">
        <img src="https://imgur.com/agN6R4Y.png" alt="" />
        <h1>JSX</h1>
        <p>Statically-typed,<br/> designed to run on <br/> modern browsers.</p>
      </div>
      </section>
    </div>
  );
}

export default App;
