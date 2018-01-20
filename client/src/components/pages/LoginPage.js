import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class LoginPage extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [


          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
     
        <div className="login">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className=" left brand-logo"
          >
            LINK
          </Link>

          <ul className="right">{this.renderContent()}</ul>
        </div>
   
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(LoginPage);
