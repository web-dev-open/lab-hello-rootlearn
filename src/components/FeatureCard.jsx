export default function FeatureCard({ img, title, text }) {
  return (
    <article className="card">
      <img src={img} alt={title} className="card__icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className="card__link">
        Learn more
      </a>
    </article>
  );
}
