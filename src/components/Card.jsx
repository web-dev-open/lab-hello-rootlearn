
const Card = ({img,alt,headingtext,paratext}) => {
  return (
    <div className="card">

      <img src={img} alt={alt} />
      <h2>{headingtext}</h2>
      <p>{paratext}</p>
    </div>
  )
}

export default Card
