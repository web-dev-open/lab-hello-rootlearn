// import logo from './logo.svg';
import Card from "./components/Card"
import img from "./assets/hero.png"
import img2 from "./assets/undefined - Imgur (1).png"
import img3 from "./assets/undefined - Imgur (2).png"
import img4 from "./assets/undefined - Imgur (3).png"
import img1 from "./assets/undefined - Imgur.png"

import './App.css';

function App() {
  return (
    <div className="App">

     <img src={img} alt="hero img"/>

      <div className='cards'>
        <Card  url={img1} h={"Declarative"} p={"React makes it painless to create interactive UI's"}/>
        <Card  url={img2} h={"Components"} p={"Build encapsulated components that manage their state"}/>
        <Card  url={img3} h={"Single Way"} p={"A set of immutable values are passed to the components."}/>
        <Card  url={img4} h={"JSX"} p={"Statically-typed designed to run on modern browsers."}/>
        </div>
    </div>
  );
}

export default App;
