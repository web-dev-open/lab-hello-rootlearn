import './App.css';
import { ReactComponent as ReactLogo } from "./images/react-logo.svg";
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  return (
    <div className="App">
      <div className='black'>
        <div className='text'>
          <h1>Say hello to <br></br> ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
          <button>Awesome!</button>
        </div>
        <div className='image'>
          <ReactLogo className="logo1" />
          <ReactLogo className="logo2" />
          <ReactLogo className="logo3" />
        </div>
      </div>
      <div className='white'>
        <div className="card">
          <img src={icon1} className="icon" />
          <h4 className="card-heading">Descriptive</h4>
          <p className="card-desc">React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src={icon2} className="icon" />
          <h4 className="card-heading">Components</h4>
          <p className="card-desc">Build encapsulated components that manage their states.</p>
        </div>
        <div className="card">
          <img src={icon3} className="icon" />
          <h4 className="card-heading">Single-Way</h4>
          <p className="card-desc">A set of immutable values are passed to the component's</p>
        </div>
        <div className="card">
          <img src={icon4} className="icon" />
          <h4 className="card-heading">JSX</h4>
          <p className="card-desc">Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
