import Card from './card-component.js';
import './../components-css/bottom-component.css'

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


function BottomDiv () {
    return (
        <div class="bottomDiv">
            <Card image={imgs[0]} heading={headings[0]} para={paras[0]}/>
            <Card image={imgs[1]} heading={headings[1]} para={paras[1]}/>
            <Card image={imgs[2]} heading={headings[2]} para={paras[2]}/>
            <Card image={imgs[3]} heading={headings[3]} para={paras[3]}/>
        </div>
    )
}

export default BottomDiv;