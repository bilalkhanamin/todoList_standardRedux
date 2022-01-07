import { ActionTypes } from "../constants/ActionTypes";

export const addTodo = (todo) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload:todo,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload:todo,
  };
};

 