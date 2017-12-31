import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component{
 renderContent() {
   switch(this.props.auth){
     case null:
     return;
     case false:
     return <li ><a  href="/auth/google">Login</a></li>;
     default:
     return[
      
      <li key="1"><Payments /></li>,
      <li key="3" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>, 
       <li key="2" ><a  href="/api/logout">Logout</a></li>
     ];
   }
 }



 render() {
  return (
   <header className="header">
   <div className="flexbox-container">
    <Link 
    to={this.props.auth ? '/surveys' : '/'} 
    className="logo" 
    >
    LOGO
    </Link>

      <nav>
     <ul className="header__links">
    
       {this.renderContent()}
 
     </ul>
</nav>
    </div>
   </header>
  );
 }
}
function mapStateToProps({auth}) {
 return {auth};
}

export default connect(mapStateToProps)(Header);