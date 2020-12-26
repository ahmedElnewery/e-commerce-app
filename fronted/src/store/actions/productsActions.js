import * as actionTypes from "./action-types"
import axios from "axios"

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })
        const { data } = await axios.get("/api/products")
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
} catch (error) {
    dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}
