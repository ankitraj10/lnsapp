import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import Cookies from "js-cookie";

const PrivateRoute = ({
  component: Component,
  userProfile,
  userLoggedIn,
  ...rest
}) => {
  //   const token = Cookies.get("loggedIn");
  //   const { userLoggedIn } = this.props;
  console.log("private route", userLoggedIn);
  const isLoggedIn = userLoggedIn ? true : false;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  userLoggedIn: state.userReducer.isLoggedIn,
});
export default connect(mapStateToProps, {})(PrivateRoute);
