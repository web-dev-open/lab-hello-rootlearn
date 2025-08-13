import FeatureCard from "./FeatureCard";

const features = [
  {
    img: "https://imgur.com/H2L3ohY.png",
    title: "Declarative",
    text: "React makes it painless to create interactive UIs.",
  },
  {
    img: "https://imgur.com/IHW1mFB.png",
    title: "Components",
    text: "Build encapsulated components that manage their state.",
  },
  {
    img: "https://imgur.com/LtUDB9y.png",
    title: "Single-Way",
    text: "A unidirectional data flow gives you more control.",
  },
  {
    img: "https://imgur.com/agN6R4Y.png",
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </section>
  );
}
