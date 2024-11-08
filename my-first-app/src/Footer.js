import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
          <div className="container">
             
          <div className="icons">
             <img src="https://imgur.com/H2L3ohY.png" alt="" />
             <h1>Declarative</h1>
             <p>React makes it painless to create interactive UI's</p>
             </div>
             <div className="icons">
             <img src="https://imgur.com/IHW1mFB.png" alt="" />
             <h1>Components</h1>
             <p>Build encapsulated components that build their stated</p>
             </div>
             <div className="icons">
             <img src="https://imgur.com/LtUDB9y.png" alt="" />
             <h1>Single Way</h1>
             <p>A set of immutable values are passed to the components</p>
             </div>
             <div className="icons">
             <img src="https://imgur.com/agN6R4Y.png" alt="" />
             <h1>JSX</h1>
             <p>Statically typed, designed to run on modern browsers.</p>
             </div>
            
          </div>

        </footer>
    </div>
  )
}

export default Footer