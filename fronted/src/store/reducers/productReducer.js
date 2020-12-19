import * as actionTypes from "./../actions/action-types"

const initialState = {
  products: [],
  loading: false,
  error: null,
}

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true, products: [], error: null }
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case actionTypes.GET_PRODUCTS_FAIL:
      return { ...state, error: action.payload,loading:false }
    default:
      return state
  }
}

