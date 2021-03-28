import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import { createStore } from "redux";
import AddTodos from "./components/AddTodos";
import ToDoList from "./components/ToDoList";
let nextTodoId = 0;

// Reducer Function 
const addTodo = (state = [], actions) => {
  switch (actions.type) {
    case "ADD_TODO":
      const newTodo = {
        id: nextTodoId++,
        text: actions.text
      }
      // Avoiding the Array Mutation
      return ([...state, newTodo]);
    default:
      return state;
  }
};

// Dispatching the ACTIONS 
const onPressSave = (text) => {
  store.dispatch({
    type: "ADD_TODO",
    text: text
  });
}

const onDelete = (id) => {
  console.log(id);
  store.dispatch({
    type: "DELETE_TODO"
  })
};
const store = createStore(addTodo);
const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <div>
        <AddTodos handleInputText={(inputText) => onPressSave(inputText)} />
        <ToDoList todoList={store.getState()} onPressDelete={(id) => onDelete(id)} />
      </div>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();

