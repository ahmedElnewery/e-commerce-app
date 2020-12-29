import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducers } from "./reducers/productReducer"
import { productDetailReducer } from './reducers/productDetailReducer';
import { cartItemsReducer } from './reducers/cartItemsReducer';


const cartFromLocalStorage = localStorage.getItem("cartItems") ?  JSON.parse(localStorage.getItem("cartItems")) : []
const initialState = {
  cart:{
    cartItems :cartFromLocalStorage
  }
}


const rootReducer = combineReducers({
    productList: productReducers,
    productDetail:productDetailReducer,
    cart: cartItemsReducer,

})

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
