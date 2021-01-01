import * as actionTypes from "./action-types";
import axios from "axios";
export const getUserDetails = (id) => async (dispatch,getState) => {
  
  try {
    dispatch({ type: actionTypes.USER_DETAILS_REQUEST });
    const {userLogin:{user}} = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `Bearer ${user.token}`
      },
    };
    const { data } = await axios.get(
      `/api/users/${id}`,
      config
    );
    dispatch({ type: actionTypes.USER_DETAILS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
