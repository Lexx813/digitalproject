import React from 'react'
import {Fade, Zoom} from 'react-reveal';



const  Listings = () => {
  return(
    <div className="listings">
    <Zoom delay={400} duration={2000}>
    <h1 className="heading-secondary">We will brand you</h1>
    <p className="heading-primary--sub">on the platforms that matter!</p>
    </Zoom>
    <Fade delay={500} duration={6000}>
      <div className="row listings__box">
       <i className="fa fa-facebook-official listings__icon" aria-hidden="true"></i>
       <i className="fa fa-yelp listings__icon" aria-hidden="true"></i>
       <i className="fa fa-google listings__icon" aria-hidden="true"></i>
       <i className="fa fa-instagram listings__icon" aria-hidden="true"></i>
       <i className="fa fa-snapchat listings__icon" aria-hidden="true"></i>
       <i className="fa fa-youtube listings__icon" aria-hidden="true"></i>
       </div>
       </Fade>
      </div>
 
  
  )
}

export default Listings;