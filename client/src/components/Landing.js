import React from 'react';

import IntroTop from './landing/IntroTop';
import Feature from './landing/Feature';
import Cards from './landing/Cards';
import Cta from './landing/Cta';



const Landing = () => {
 return(

   <div>
     <IntroTop/>
     <Cta />
     <Feature/>
     <Cards/>
   </div> 

);
};
export default Landing;