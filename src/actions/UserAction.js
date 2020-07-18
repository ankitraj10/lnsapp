import { LOGGED_IN, LOGGED_OUT, DASHBOARD_TYPE } from "./Types";

export const userLogin = () => (dispatch) => {
  dispatch({
    type: LOGGED_IN,
  });
};

export const userLogout = () => (dispatch) => {
  dispatch({
    type: LOGGED_OUT,
  });
};
export const setUserRole = (data) => (dispatch) => {
  console.log("user role", data);
  dispatch({
    type: DASHBOARD_TYPE,
    payload: data,
  });
};
