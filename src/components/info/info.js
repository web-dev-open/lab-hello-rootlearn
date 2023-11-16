import "./info.css";

const Info = ({ icon, title, description }) => {
  return (
    <section className="info">
      <div className="info-icon">
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Info;
