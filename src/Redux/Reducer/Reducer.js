import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  todoList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };

    case ActionTypes.DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo !== payload),
      };

    default:
      return { ...state, payload };
  }
};
export default reducer;
