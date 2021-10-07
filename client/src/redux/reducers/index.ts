import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import categories from "./categoryReducer";

export default combineReducers({
  authReducer,
  alertReducer,
  categories,
});
