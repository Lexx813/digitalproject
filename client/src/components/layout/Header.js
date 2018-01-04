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
    to={this.props.auth ? '/surveys' : '/'} 
    className="header__logo" 
    >
    LOGO
    </Link>
    </h1> 
  

     <nav id="nav">
     <ul className="header__group">
     <li className="header__group--item">Home</li>
     <li className="header__group--item">About</li>
     <li className="header__group--item">Services</li>
     <li className="header__group--item">Blog</li>
     <li className="header__group--item">Contact</li>
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