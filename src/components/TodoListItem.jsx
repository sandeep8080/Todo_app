import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    TextField
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from '@material-ui/icons/Update';
import { useState } from 'react';
import { deleteTodo, updateTodo } from "../react-redux/action";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text } = todo;
    const [edit, setEdit] = useState(false);
    const [textUpdate, setTextUpdate] = useState(text);

    const handleEditPress = (id) => {
        if (edit) {
            const updatedTodo = {
                id: id,
                text: textUpdate
            }
            dispatch(updateTodo(updatedTodo));
        }
        setEdit(!edit);
    }
    return (<ListItem key={id}>
        {edit ? <TextField value={textUpdate} onChange={(e) => setTextUpdate(e.target.value)} /> : <ListItemText primary={text} />}
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit"
                onClick={() => handleEditPress(id)}>
                {edit ? <UpdateIcon /> : <EditIcon />}
            </IconButton>
            <IconButton edge="end" aria-label="delete"
                onClick={() => {
                    dispatch(deleteTodo(id));
                }}
            >
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);
}

export default TodoListItem;