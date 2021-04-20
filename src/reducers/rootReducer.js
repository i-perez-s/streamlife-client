import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { followReducer } from "./followReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  follows: followReducer,
});
