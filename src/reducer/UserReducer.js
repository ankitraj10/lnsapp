import { LOGGED_IN, LOGGED_OUT, DASHBOARD_TYPE } from "../actions/Types";

const initialState = {
  isLoggedIn: false,
  dashboardType: "student",
  users: [
    { username: "david", password: "123123", role: "student" },
    { username: "joe", password: "123123", role: "teacher" },
  ],
};

export function userReducer(state = initialState, action) {
  console.log("user role", action);
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case DASHBOARD_TYPE:
      return {
        ...state,
        dashboardType: action.payload,
      };

    default:
      return state;
  }
}
