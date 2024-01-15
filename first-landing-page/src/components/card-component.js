import './../components-css/card.css';

function Card (props) {
    return (
        <div class="card">
            <img class="cardImage" src={props.image}/>
            <h3 class="cardHeading">{props.heading}</h3>
            <p class="cardPara">{props.para}</p>
        </div>
    )
}

export default Card;