import React from "react";
import ReactDOM from "react-dom";

export const initialState = [{
  item: "Click item to mark complete!",
  completed: false,
  id: Date.now(),
  itemArray:[]
}]; //this closes initialState

export const listReducer = (state, action) => {
  switch(action.type) {
    case "ADD-TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      } //this closes newTodo
      return [...state, newTodo]
    case "COMPLETED":
        return state.map(event => event.id === action.id ? { ...event, completed: !event.completed} : event);
    case "REMOVE":
      return state.filter(event => !event.completed);  

      default:
        throw state;
  } //this closes the switch
}; //this closes listReducer