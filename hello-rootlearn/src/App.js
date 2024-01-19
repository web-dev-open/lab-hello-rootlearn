import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className='head'>
    <h1>Say hello to <br/>ReactJS</h1>
    <p>You will learn a Frontend framework from scratch to become an Ninka Developer</p>
    <button>Awesome!</button>

    </div>
    <div className='four-columns'>
       <div>
        <img src='https://imgur.com/H2L3ohY.png'/>
        <span>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </span>
       </div>
       <div>
        <img src='https://imgur.com/IHW1mFB.png'/>
        <span>
          <h2>Components</h2>
          <p>Build encapsulates components that manage their state</p>
        </span>
       </div>
       <div>
        <img src='https://imgur.com/LtUDB9y.png'/>
        <span>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </span>
       </div>
       <div>
        <img src='https://imgur.com/agN6R4Y.png'/>
        <span>
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers</p>
        </span>
       </div>
    </div>
    </div>
  );
}

export default App;
