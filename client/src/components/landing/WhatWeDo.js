import React from 'react'
import {Link}from 'react-router-dom';
import Seo from '../../img/composition/SEO.jpg';
import Website from '../../img/composition/website.jpg';
import Marketing from '../../img/composition/marketing.jpg';

const WhatWeDo = () => {
  return(
    <div className="section-about">        
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We have exactly what you need
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                       <h3 className="heading-tertiary u-margin-bottom-small"> Why go anywhere else when we got you covered </h3>
                       <p className="paragraph">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                       </p>
                       <h3 className="heading-tertiary u-margin-bottom-small"> Why go anywhere else when we got you covered </h3>
                       <p className="paragraph">
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                       </p>
                       <Link to="/about" className="btn-text">Learn more &rarr;</Link>
                    </div>
                    <div className="col-1-of-2">
                     <div className="composition">
                     <img className="composition__photo composition__photo--p1" alt="SEO" src={Seo}/>
                     <img className="composition__photo composition__photo--p2" alt="Marketing" src={Marketing}/>
                     <img className="composition__photo composition__photo--p3" alt="Website" src={Website}/>
                     </div>
                    </div>
                </div>
    </div>
  )
} 


export default WhatWeDo;





