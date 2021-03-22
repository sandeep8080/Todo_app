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

const ToDoList = () => {
  return (
    <div>
      <h1> Your TODO's</h1>
      <div>
        <List>
          <ListItem>
            <ListItemText primary="TODO" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default ToDoList;
