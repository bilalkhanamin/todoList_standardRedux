import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo"

function TodoList() {
  const TodoList = useSelector((state) => state.Todos.todoList);
  console.log(TodoList);
  return (
    <div>
      {TodoList.map((e) => (
        <Todo todo={e} />
      ))}
    </div>
  );
}

export default TodoList;
