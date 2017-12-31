import React from 'react'



const Feature = () => {
  return(
        <div className="section-features">
        <div className = "row" > <div className="col-1-of-4">
          <div className="feature-box">
         < i className = "feature-box__icon fa fa-search" aria-hidden = "true" > </i>
            <h3 className="heading-tertiary u-margin-bottom-small">SEO</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
              aspernatur.
            </p>
          </div>
        </div> < div className = "col-1-of-4" > <div className="feature-box">
          <i className="feature-box__icon fa fa-user-circle" aria-hidden="true"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">Social Media</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
            aspernatur.
          </p>
          </div>
         </div>
        <div className="col-1-of-4">
        <div className="feature-box">
        <i className="feature-box__icon fa fa-cog" aria-hidden="true"></i > <h3 className="heading-tertiary u-margin-bottom-small">Listings Management</h3> 
            < p className = "feature-box__text" > Lorem ipsum dolor sit amet consectetur adipisicing elit.Aperiam,
            ipsum sapiente aspernatur. 
            </p>
            </div> 
            </div> 
            < div className = "col-1-of-4" > <div className="feature-box">
            <i className="feature-box__icon fa fa-globe" aria-hidden="true"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Websites</h3>
            <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
            aspernatur.
            </p>
           </div> 
          </div>
        </div>
      </div>

  )
}

export default Feature;