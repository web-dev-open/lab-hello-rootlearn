function Feature({image, title, description}) {
  return (
    <>
      <div className="feature-div">
        <img src={image} alt={title} className="feature-img"/>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Feature;
