import "./App.css";
import AddTodos from "./components/AddTodos";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Your TODO App</h1>
      </header>
      <section>
        <AddTodos />
        <ToDoList />
      </section>
      <footer>
        <h4>@garg</h4>
      </footer>
    </div>
  );
}

export default App;
