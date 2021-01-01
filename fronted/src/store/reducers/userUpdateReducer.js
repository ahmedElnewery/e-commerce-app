import * as actionTypes from "./../actions/action-types";

const initialState = {
  userUpdated: {},
  loading: false,
  error: null,
};
export const userUpdatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,loading: false,success: true, userUpdated: action.payload,
      };
    case actionTypes.UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
