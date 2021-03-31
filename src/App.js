import "./App.css";
import AddTodos from "./components/AddTodos";
import ToDoList from "./components/ToDoList";
import { Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
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
        <Link href="https://github.com/sandeep8080/Todo_app" onClick={(e) => e.preventDefault}><GitHubIcon /></Link>
      </footer>
    </div>
  );
}

export default App;
