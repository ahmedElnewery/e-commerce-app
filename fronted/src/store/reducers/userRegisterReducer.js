import * as actionTypes from "./../actions/action-types";

const initialState = {
  user: {},
  loading: false,
  error: null,
};
 export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REGISTER_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case actionTypes.USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    
    default:
      return state;
  }
};


