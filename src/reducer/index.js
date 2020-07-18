import { combineReducers } from "redux";
import { studentReducer } from "./StudentReducer";
import { userReducer } from "./UserReducer";

export default combineReducers({
  studentReducer,
  userReducer,
});
