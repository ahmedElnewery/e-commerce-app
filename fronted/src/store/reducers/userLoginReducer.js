import * as actionTypes from "./../actions/action-types";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
 export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case actionTypes.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.USER_LOGOUT:
      return {}

    default:
      return state;
  }
};


