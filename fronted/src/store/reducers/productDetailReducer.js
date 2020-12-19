import * as actionTypes from "./../actions/action-types"
const initialState = {
  product: {},
  loading: false,
  error: null,
}
export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, error: null }
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return { ...state, product: action.payload, loading: false }
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
      default:
          return state
  }
}
