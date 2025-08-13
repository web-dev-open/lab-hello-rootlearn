import logo from "../logo.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a web developer.
        </p>
        <a className="btn" href="#awesome">
          Awesome!
        </a>
      </div>
      <div className="hero__art">
        <img src={logo} className="hero__react" alt="React spinning" />
      </div>
    </section>
  );
}
