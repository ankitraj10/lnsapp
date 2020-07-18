import React, { Component } from "react";
import TeacherDashboard from "../components/TeacherDashboard";
import StudentDashboard from "../components/StudentDashboard";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { dashBoardType } = this.props;
    if (dashBoardType == "student") {
      return (
        <div>
          <StudentDashboard history={this.props.history} />
        </div>
      );
    } else {
      return (
        <div>
          <TeacherDashboard history={this.props.history} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  dashBoardType: state.userReducer.dashboardType,
});
export default connect(mapStateToProps, {})(Dashboard);
