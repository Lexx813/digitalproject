import React from 'react'



const IntroTop = () => {
  const heading = ' Digital';
  return(
  <div className = "header-box heading-primary" >
    <div className="header-box__container">
       <h1 className = " heading-primary--main" > 
       {heading}      
       </h1>
    <p className = "heading-primary--sub" > 
    The solution to all your digital needs!
    </p>
    </div>
    <div className="header-box__button">
        <button className = "btn btn--white" > Start Now </button>
    </div>
    </div>
  )
}

export default IntroTop;