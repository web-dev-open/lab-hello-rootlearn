import logo from './react-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='title'>
        <h1 className='title1' > Say hello to ReactJS</h1>
        <p> You will learn a frontend framework from scratch, to become an Ninka Developer.</p>
        <button className='btn'>Awesome!</button>
        </div>
        <div className='logo'> 
        <img  style={{marginRight:'350px'}} src={logo} className="App-logo" alt="logo" />
        <img  style={{marginLeftt:'350px'}} src={logo}  className="App-logo" alt="logo" />
        <img  style={{marginRight:'350px'}} src={logo} className="App-logo" alt="logo" />
        </div>
        
      </header>
      <div className="footer">
          <div className="first">
              <img src= "https://imgur.com/H2L3ohY.png" alt="" />
              <h1>Declarative</h1>
              <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="sec">
              <img src="https://imgur.com/IHW1mFB.png" alt="" />
              <h1>Components</h1>
              <p> Build encapsulated components that manage their state.</p>
          </div>
          <div className="third">
              <img src="https://imgur.com/LtUDB9y.png" alt="" />
              <h1>Single-Way</h1>
              <p>A set of immutable values are passed to the components's.</p>
          </div>
          <div className="four">
              <img src="https://imgur.com/agN6R4Y.png" alt="" />
              <h1>JSX</h1>
              <p>Statically-typed. designed to run on modern browsers.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
