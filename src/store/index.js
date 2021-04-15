import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
  post: postReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

// , composeWithDevTools(applyMiddleware())
