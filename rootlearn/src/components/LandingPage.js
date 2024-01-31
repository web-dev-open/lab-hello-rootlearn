import './LandingPage.css';
import React from 'react';


const heading = 'Say hello to ReactJS';
const para = 'You will learn a Frontend framework from scratch, to become a Ninja Developer.';
const buttonText = 'Awesome!'

function LandingPage () {
    return (
        <div class="landingpage">
            <h1>{heading}</h1>
            <p class="landingpagepara">{para}</p>
            <button>{buttonText}</button>
        </div>
    )
}

export default LandingPage;