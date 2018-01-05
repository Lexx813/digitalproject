import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments';


class Header extends Component{
 renderContent() {
   switch(this.props.auth){
     case null:
     return;
     case false:
     return <li className="header__group--item"  ><a  href="/auth/google">Login</a></li>;
     default:
     return[
      
      // <li key="1"><Payments /></li>,
      // <li key="3" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>, 
       <li key="2"className="header__group--item" ><a  href="/api/logout">Logout</a></li>
     ];
   }
 }



 render() {
  return (
   <header className="header" id="header">
   
   <h1> <Link 
    to={this.props.auth ? '/dashboard' : '/'} 
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
       {this.renderContent()}
 
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