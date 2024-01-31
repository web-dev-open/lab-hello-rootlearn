import './SecondPage.css';
import React from 'react';

function SecondPage (props) {
    return (
        <div class="secondpage">
            <img class="secondpageimage" src={props.image} alt={props.heading}/>
            <h3 class="secondpageheading">{props.heading}</h3>
            <p class="secondpagepara">{props.para}</p>
        </div>
    )
}

export default SecondPage;