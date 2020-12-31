import * as actionTypes from "./action-types";
import axios from "axios";
export const register = (name,email, password) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );
    dispatch({ type: actionTypes.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error)
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};