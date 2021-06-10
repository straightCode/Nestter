import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import auth from "./reducers/auth";

const reducer = combineReducers({
  auth,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

window.state = store.getState();