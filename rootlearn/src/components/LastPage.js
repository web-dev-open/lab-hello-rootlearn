import './LastPage.css';
import SecondPage from './SecondPage';
import React from 'react';

const headings = ["Declarative", "Components", "Single-Way", "JSX"];
const paras = [
    "React makes it painless to create interactive UIs.", 
    "Build encapsulated components that manage their state.", 
    "A set of immutable values are passed to the components.", 
    "Statistically typed, designed to run on modern browsers."
];
const imgs = [
    "https://imgur.com/H2L3ohY.png",
    "https://imgur.com/IHW1mFB.png",
    "https://imgur.com/LtUDB9y.png",
    "https://imgur.com/agN6R4Y.png"
];


function LastPage () {
    return (
        <div className="lastpage">
            <SecondPage image={imgs[0]} heading={headings[0]} para={paras[0]} alt={headings[0]}/>
            <SecondPage image={imgs[1]} heading={headings[1]} para={paras[1]} alt={headings[1]}/>
            <SecondPage image={imgs[2]} heading={headings[2]} para={paras[2]} alt={headings[2]}/>
            <SecondPage image={imgs[3]} heading={headings[3]} para={paras[3]} alt={headings[3]}/>
        </div>
    )
}

export default LastPage;