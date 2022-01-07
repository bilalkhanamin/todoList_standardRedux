import { combineReducers } from "redux";

import reducer from "./Reducer";

export const reducers = combineReducers({
  Todos: reducer,
});
