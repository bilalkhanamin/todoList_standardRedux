import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Actions/Actions"; 
import { v4 as uuidv4 } from "uuid";

function Form() {

  const [UserInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  let myuuid = uuidv4();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(UserInput);
    e.target[0].value = ""
   };

  const addTask = (userInput) => {
    const copy = { id: myuuid, task: userInput, complete: false };
    dispatch(addTodo(copy));
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Things Todo" onChange={handleChange} required/>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Form;
