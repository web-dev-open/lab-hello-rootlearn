import "./Cards.css";
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
export default function Card() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-header">JSX</div>
        <img src={image1} alt="Card 1" className="card-image" />
        <div className="card-text">Statically-typed designed to run on modern browsers</div>
      </div>
      <div className="card">
        <div className="card-header">Declarative</div>
        <img src={image2} alt="Card 2" className="card-image" />
        <div className="card-text">React makes it painless to create interactive UIs</div>
      </div>
      <div className="card">
        <div className="card-header">Components</div>
        <img src={image3} alt="Card 3" className="card-image" />
        <div className="card-text">Build encapsulated components that manage their state</div>
      </div>
      <div className="card">
        <div className="card-header">Single-Way</div>
        <img src={image4} alt="Card 4" className="card-image" />
        <div className="card-text">A set of immutable values are passed to the components</div>
      </div>
    </div>
  );
}
