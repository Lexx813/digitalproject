import React from 'react';

import IntroTop from './landing/IntroTop';
import Feature from './landing/Feature';
import Cards from './landing/Cards';
import Listings from './landing/Listings';
import Video from './landing/Video';


const Landing = () => {
 return(

   <div>
     <IntroTop/>
     <Listings />
     <Video/>
     <Feature/>
     <Cards/>
   </div> 

);
};
export default Landing;