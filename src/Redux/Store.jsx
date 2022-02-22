import {applyMiddleware,createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";

var middlewares=[]

var store=createStore(RootReducer,composeWithDevTools(applyMiddleware(...middlewares),))

export default store;
