import * as actionTypes from "./action-types";
import axios from "axios";
export const updateUserProfile = (updatedUser) => async (dispatch,getState) => {
  
  try {
    dispatch({ type: actionTypes.UPDATE_PROFILE_REQUEST });
    const {userLogin:{user}} = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `Bearer ${user.token}`
      },
    };
    const { data } = await axios.put(
      `/api/users/profile`,
      updatedUser,
      config
    );
    dispatch({ type: actionTypes.UPDATE_PROFILE_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
