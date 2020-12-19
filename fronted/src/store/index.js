import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducers } from "./reducers/productReducer"
import { productDetailReducer } from './reducers/productDetailReducer';

const initialState = {}


const rootReducer = combineReducers({
    productList: productReducers,
    productDetail:productDetailReducer
})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
