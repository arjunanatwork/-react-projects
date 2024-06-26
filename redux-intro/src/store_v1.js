import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import {createLogger} from "redux-logger/src";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import {configureStore} from "@reduxjs/toolkit";

const logger = createLogger({});

const rootReducer = combineReducers({account: accountReducer, customer: customerReducer})
const store_v1 = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store_v1;