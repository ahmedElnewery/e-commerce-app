import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducers } from "./reducers/productReducer";
import { productDetailReducer } from "./reducers/productDetailReducer";
import { cartItemsReducer } from "./reducers/cartItemsReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { userDetailsReducer } from "./reducers/userDetailsReducer";
import { userUpdatedReducer } from "./reducers/userUpdateReducer";

const cartFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
  userLogin: {
    user: userInfoFromStorage,
  },
};

const rootReducer = combineReducers({
  productList: productReducers,
  productDetail: productDetailReducer,
  cart: cartItemsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdated: userUpdatedReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
