import React from 'react'
import videom from '../../img/video/Working-Space.mp4';
import videow from '../../img/video/Working-Space.webm';

const Video = () => {
    return (
        <div>
    <div className="bg-video">
        <video autoPlay loop className="bg-video__content">
            <source src={videom} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src={videow}type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </div>
    <div>
    <h1>video content</h1>
    </div>
  </div>

    )
}


export default Video;




