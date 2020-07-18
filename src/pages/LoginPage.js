import React, { Component } from "react";
import Login from "../components/Login";
import Header from "../components/Header";
// function Display(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <Header />;
//   }
//   return <Login />;
// }
class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login history={this.props.history} />
      </div>
    );
  }
}

export default LoginPage;
