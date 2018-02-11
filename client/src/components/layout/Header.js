import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments';


class Header extends Component{



 render() {
  return (
   <header className="header" id="header">
   
   <h1> <Link 
    to={'/'} 
    className="header__logo" 
    >
    LOGO
    </Link>
    </h1> 
  

     <nav id="nav">
     <ul className="header__group">
     <li className="header__group--item"><Link to='/'>Home </Link></li>
     <li className="header__group--item"><Link to='/about'>About </Link></li>
     <li className="header__group--item"><Link to='/services'>Services </Link></li>
     <li className="header__group--item"><Link to='/blog'>Blog </Link></li>
     <li className="header__group--item"><Link to='/contact'> Contact</Link></li>
    
 
     </ul>
</nav>
    
   </header>
  );
 }
}
function mapStateToProps({auth}) {
 return {auth};
}

export default connect(mapStateToProps)(Header);