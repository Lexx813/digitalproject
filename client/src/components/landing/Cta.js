import React from 'react'
import google from '../../img/logos/google.png';
import fb from '../../img/logos/facebook.png';
import bing from '../../img/logos/bing.png';
import yahoo from '../../img/logos/Yahoo.png';
import yelp from '../../img/logos/yelp.png';



const Cta = () => {
  return(
    <div className="cta-container">
      <div className="row">
        <div className = "col-1-of-3" > <img src={google} alt="Logo"/></div>
        <div className = "col-1-of-3" > <img src={fb} alt="Logo"/></div>
        <div className="col-1-of-3"> <img src={bing} alt="Logo"/></div>
      </div>
      <div className="row">
        <div className = "col-2-of-4" > <img src={yahoo} alt="Logo"/></div>
        <div className = "col-2-of-4" > <img src={yelp} alt="Logo"/></div>
      </div>
    </div>
  
  )
}

export default Cta;