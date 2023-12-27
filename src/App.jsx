
import './App.css'
import Card from './components/Card'
function App() {

  return (
   <>
  <header>
    <h1>Say hello to  ReactJS</h1>
    <p>you will learn a frontend framework from scratch to become a ninka developer</p>
    <button>Awsome!</button>
  </header>
  <div className="card-container">
  <Card img="https://imgur.com/H2L3ohY.png" alt="logo" headingtext="Declaretive" paratext="React makes it painless to create interactive UI's"/>
  <Card img="https://imgur.com/IHW1mFB.png" alt="logo" headingtext="Components" paratext="Build encapsulated components that manage their states"/>
  <Card img="https://imgur.com/LtUDB9y.png" alt="logo" headingtext="Single-way" paratext="A set of immutable values are passed to the component's "/>
  <Card img="https://imgur.com/agN6R4Y.png" alt="logo" headingtext="JSX" paratext="Statically-typed designed to run on modern-browsers"/>
  </div>
 

   </>
  )
}

export default App
