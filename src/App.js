import './App.css';

function App() {
  return (
    <div>
    <div className='landing_page'>
      <h1>Say hello to ReactJs</h1>
      <p>You will learn frontend Framework from scratch to become a ninka developer</p>
      <button>Awesome!</button>
    </div>
    <div className='content'>
      <div>
          <img src="https://imgur.com/H2L3ohY.png" alt="img1"></img>
          <h2>Declarative</h2>
          <p>React makes it Painless to make interactive UIs</p>
      </div>
      <div>
          <img src="https://imgur.com/IHW1mFB.png" alt="img1"></img>
          <h2>Componenets</h2>
          <p>Build encapsulated components that manage their state</p>
      </div>
      <div>
          <img src="https://imgur.com/LtUDB9y.png" alt="img1"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values that are passed to components</p>
      </div>
      <div>
          <img src="https://imgur.com/agN6R4Y.png" alt="img1"></img>
          <h2>JSX</h2>
          <p>Statically typed, designed to run on modern browsers</p>
      </div>
    </div>
  </div>
  );
}

export default App;
