import { useState } from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import ToDoList from "./components/ToDoList";
const data = [{
  id: 1,
  text: "Learn Redux"
}, {
  id: 2,
  text: "Learn Redux Store"
}];


function App() {
  const [todoList, setTodoList] = useState(data);
  const onEnterInputTextField = (inputText) => {
    console.log(inputText);
    if (inputText) {
      const newTodo = {
        id: todoList.length + 1,
        text: inputText
      }

      // Avoiding Array Mutation by passing the new array
      setTodoList([...todoList, newTodo]);
    }

  }
  console.log(todoList);
  return (
    <div className="app-container">
      <header>
        <h1>Your TODO App</h1>
      </header>
      <section>
        <AddTodos handleInputText={(e) => onEnterInputTextField(e)} />
        <ToDoList todoList={todoList} />
      </section>
      <footer>
        <h4>https://github.com/sandeep8080/Todo_app</h4>
      </footer>
    </div>
  );
}

export default App;
