import * as actionTypes from "./../actions/action-types";

const initialState = {
  userDetails: {},
  loading: false,
  error: null,
};
 export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, userDetails: action.payload };
    case actionTypes.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    
    default:
      return state;
  }
};


