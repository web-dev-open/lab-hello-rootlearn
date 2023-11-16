import "./App.css";

// Components
import Banner from "./components/banner/banner";
import Info from "./components/info/info";

// Data
import infoData from "./data/infoData";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
        {infoData.map((info) => (
          <Info key={info.title} {...info} />
        ))}
      </div>
    </div>
  );
}

export default App;
