import React from 'react';

import IntroTop from './landing/IntroTop';
import Feature from './landing/Feature';
import Cards from './landing/Cards';
import Listings from './landing/Listings';



const Landing = () => {
 return(

   <div>
     <IntroTop/>
     <Listings />
     <Feature/>
     <Cards/>
   </div> 

);
};
export default Landing;