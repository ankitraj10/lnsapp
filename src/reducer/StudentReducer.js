// import { GET_NAV_MENU_LINKS } from "../action/Types";

const initialState = {
  studentData: { fff: "ff" },
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_NAV_MENU_LINKS:
    //   return {
    //     ...state,
    //     navMenuLinks: action.payload
    //   };

    default:
      return state;
  }
}
