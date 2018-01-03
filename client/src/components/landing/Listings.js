import React from 'react'
import {Fade, Flip, Rotate, Zoom} from 'react-reveal';



const  Listings = () => {
  return(
    <div className="listings">
    <Zoom>
    <h1 className="heading-secondary">We will brand you</h1>
    </Zoom>
    <p className="heading-primary--sub">on the platforms that matter!</p>
    <Flip>
      <div className="row listings__box">
       <i className="fa fa-facebook-official listings__icon" aria-hidden="true"></i>
       <i className="fa fa-yelp listings__icon" aria-hidden="true"></i>
       <i className="fa fa-google listings__icon" aria-hidden="true"></i>
       <i className="fa fa-instagram listings__icon" aria-hidden="true"></i>
       <i className="fa fa-snapchat listings__icon" aria-hidden="true"></i>
       <i className="fa fa-youtube listings__icon" aria-hidden="true"></i>
       </div>
       </Flip>
      </div>
 
  
  )
}

export default Listings;