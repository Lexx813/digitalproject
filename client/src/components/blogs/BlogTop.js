import React from 'react'
import videom from '../../img/video/Love-Coding.mp4';
import videow from '../../img/video/Love-Coding.webm';


const BlogTop = () => {
  const blog ='Welcome to our blog'
  return(
    <div>
           <div className="bg-video">
        <video autoPlay loop className="bg-video__content">
            <source src={videom} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src={videow}type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </div>
       <div className = "blog-box heading-primary" >
    <div className="header-box__container">
       <h1 className = "blog-box__heading heading-primary--main" > 
       {blog}      
       </h1>
    <p className = "heading-primary--sub" > 
    where we talk about inovation and progression!
    </p>
    </div>
    </div>
    </div>
  )
}


export default BlogTop;