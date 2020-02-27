import React, {useReducer, useState} from "react";
import {listReducer, initialState} from "../reducers/listReducer";
import Todo from "./Todo";


const TodoForm = () => {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChanges = (event) => {
    setTodo(event.target.value);
  } //this closes handleChanges

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD-TODO", payload: todo});
  } //this closes the handleSubmit

  const handleClear = event => {
    event.preventDefault();
    dispatch({ type: "REMOVE", payload: todo});
  } //this closes the handleClear

  console.log("this is handling state", state);

  return (
    <div className="form">
      <form>
        <label htmlFor="todo">Add Todo:</label>
        <input 
        id="todo"
        name="todo"
        type="text"
        value={todo}
        onChange={handleChanges}/>
        <div className="btncontainer">
        <button className="addbtn" onClick={handleSubmit}>Add Item</button>
        <button className="removebtn" onClick={handleClear}>Delete Item</button>
        </div>
      </form>
      <Todo id={state.id} todo={todo} dispatch={dispatch} state={state}/>
    </div>
  ) //this closes the return

} //this closes TodoForm

export default TodoForm;