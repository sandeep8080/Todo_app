import {
  List
} from "@material-ui/core";
import TodoListItem from "./TodoListItem";

/**
 * useSelector hook, let our React components read data from the Redux store.
 * useSelector accepts a single function, which we call a selector function. 
 * A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result.
 */
import { useSelector } from "react-redux";

const ToDoList = () => {

  const todoList = useSelector(state => state);

  //console.log(todoList);
  return (
    <div className="list-container">
      <h2> Your TODO's</h2>
      <div className="line"></div>
      <div>
        <List>
          {todoList.todos.map((oTodo, index) => {
            return <TodoListItem key={index} todo={oTodo} />
          })}

        </List>
      </div>
    </div >
  );
};

export default ToDoList;
