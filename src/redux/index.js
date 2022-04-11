import { combineReducers } from "redux";
import postReducer from "./reducer/post.reducer";

const rootReducer = combineReducers({
  postReducer: postReducer,
});

export default rootReducer;
