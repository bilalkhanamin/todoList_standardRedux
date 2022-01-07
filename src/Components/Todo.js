import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Actions/Actions";

function Todo(props) {
  const [state, setstate] = useState();
  const disptach = useDispatch();

  const strike = () => {
    let completed = !props.todo.complete;
    setstate(completed);

   };

  const removeTodo = () => {
    console.log(props.todo.id);
    disptach(deleteTodo(props.todo));
  };
  return (
    <div>
      <ul>
        <li key={props.todo.id}>
          <span className={state ? "strike" : ""}>{props.todo.task}</span>
          <div className="buttons">
            <button onClick={strike}>
              <AiOutlineCheckCircle />
            </button>
            <button className="closebtn" onClick={removeTodo}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
