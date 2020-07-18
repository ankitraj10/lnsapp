import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogout } from "../actions/UserAction";

class LogoutText extends Component {
  handleLogout = () => {
    this.props.userLogout();
    this.props.history.push("/login");
  };
  render() {
    return <div onClick={() => this.handleLogout()}>Logout</div>;
  }
}

export default connect(null, { userLogout })(LogoutText);
