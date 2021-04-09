import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
  post: postReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware()));
