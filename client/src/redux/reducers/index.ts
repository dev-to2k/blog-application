import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import categories from "./categoryReducer";
import homeBlogs from "./homeBlogReducer";

export default combineReducers({
  authReducer,
  alertReducer,
  categories,
  homeBlogs,
});
