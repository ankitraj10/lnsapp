import React, { Component } from "react";
import { userLogin, setUserRole } from "../actions/UserAction";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { users, userLogin } = this.props;
    var { email, password } = this.state;
    var isUserAuthenticate = users.find(
      (user) => user.username == email && user.password == password
    );
    if (isUserAuthenticate) {
      userLogin();
      console.log("user role", isUserAuthenticate);
      this.props.setUserRole(isUserAuthenticate.role);
      this.props.history.push("/");
    } else {
      alert("Invalid username or password");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            // type="email"
            autoComplete="email"
            onChange={this.handleChange}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={this.handleChange}
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //   className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});
export default connect(mapStateToProps, { userLogin, setUserRole })(Form);
