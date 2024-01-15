import './../components-css/top-component.css';

const heading = 'Say hello to ReactJS';
const para = 'You will learn a Frontend framework from scratch, to become a Ninja Developer.';
const buttonText = 'Awesome!'

function TopDiv () {
    return (
        <div class="topDiv">
            <h1>{heading}</h1>
            <p class="topDivPara">{para}</p>
            <button>{buttonText}</button>
        </div>
    )
}

export default TopDiv;