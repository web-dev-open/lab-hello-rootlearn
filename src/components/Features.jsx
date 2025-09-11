import Feature from "./Feature";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import './features.css'

function Features() {
  return (
    <>
      <main className="main">
        <Feature
          image={img1}
          title={"Declarative"}
          description={"React makes it painless to create interactive UIs."}
        />

        <Feature
          image={img2}
          title={"Components"}
          description={"Build encapsulated components that manage their state."}
        />

        <Feature
          image={img3}
          title={"Single-Way"}
          description={
            "A set of immutable values are passed to the component's"
          }
        />

        <Feature
          image={img4}
          title={"JSX"}
          description={"Statically-typed, designed to run on modern browsers."}
        />
      </main>
    </>
  );
}

export default Features;
