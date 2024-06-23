import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import {createLogger} from "redux-logger/src";
import {thunk} from "redux-thunk";

const logger = createLogger({});

const rootReducer = combineReducers({account: accountReducer, customer: customerReducer})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;