import Todos from "./Todos";
import { IconButton } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoList = ({ todoList, onPressDelete }) => {
  return (
    <div>
      <h1> Your TODO's</h1>
      <div>
        <List>
          {todoList.map((oTodo) => {
            const { id, text } = oTodo;
            return (<ListItem key={id}>
              <ListItemText primary={text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => onPressDelete(id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)
          })}

        </List>
      </div>
    </div>
  );
};

export default ToDoList;
