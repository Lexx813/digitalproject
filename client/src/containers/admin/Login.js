import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    success: false
  };

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputPassword = event => {
    this.setState({ password: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.login.isAuth) {
      this.props.history.push("/dashboard");
    }
  }

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(loginUser(this.state));
  };

  render() {
    let user = this.props.user;
    return (
      <div className="login">
        <form className="form" onSubmit={this.submitForm}>
          <h2>Log in here</h2>
          <div className="form_group">
          <label className="form__label">Enter Email</label>
            <input className="form__input"
              type="email"
              placeholder="enter email"
              value={this.state.email}
              onChange={this.handleInputEmail}
            />
          </div>
          <div className="form__group">
          <label className="form__label">Enter Password</label>
            <input className="form__input"
              type="password"
              placeholder="enter  password"
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </div>
          <button className="btn btn--primary" type="submit">Log in</button>

          <div className="error">
            {user.login ? <div>{user.login.message}</div> : null}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LoginPage);
