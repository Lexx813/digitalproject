import React from 'react'



const IntroTop = () => {
  const heading = 'The solution for all your digital marketing need\'s';
  return(
    <div className="header-box"> 
    <div className="header-box__container">
    <h1 className="header-box__heading">{heading}</h1>
    </div>
    <div className="header-box__button">
    <button className = "btn btn--white" > Start Now </button>
    </div>
    </div>
  )
}

export default IntroTop;