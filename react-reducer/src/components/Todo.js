import React from "react";

const Todo = (props => {
  const handleToggle = (id) => {
    props.dispatch({ type: "COMPLETED", id: id})
  } //this closes toggle

  return (
    <div className="listItems">
      {props.state.map(todo => {
        return(
          <div className={`todo${todo.completed} ? " Completed" : ""}`} onClick={() => handleToggle(todo.id)}
          key={todo.id}>
            <p>{todo.item}</p>
          </div>  
        ) 
        
      })}
    </div>
  )
}) //this closes Todo props

export default Todo;