import React from 'react';

import IntroTop from './landing/IntroTop';
import Feature from './landing/Feature';
import Cards from './landing/Cards';
import Listings from './landing/Listings';
import WhatWeDo from './landing/WhatWeDo';
// import Video from './landing/Video';


const Landing = () => {
 return(

   <div>
     <IntroTop />
     <Listings />
     <WhatWeDo />
     <Feature />
     <Cards />
   </div> 

);
};
export default Landing;