import React from 'react'
import video from '../../img/video/Love-Coding.mp4';
import videow from '../../img/video/Love-Coding.webm';


const IntroTop = () => {
  const heading = ' Digital';
  return(
< div className = "header-box heading-primary" >
         <div className="bg-video">
        <video autoPlay loop className="fillWidth">
            <source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src={videow}type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
        </div>
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