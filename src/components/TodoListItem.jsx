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
import { deleteTodo, updateTodo, showAlert } from "../react-redux/action";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text } = todo;
    const [edit, setEdit] = useState(false);
    const [textUpdate, setTextUpdate] = useState(text);

    const handleEditPress = (id, text) => {
        if (edit && (text !== textUpdate)) {
            const updatedTodo = {
                id: id,
                text: textUpdate
            }
            dispatch(updateTodo(updatedTodo));
            dispatch(showAlert({
                type: 'success',
                msg: "Todo Edited..."
            }));
        }
        setEdit(!edit);
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        dispatch(showAlert({
            type: 'error',
            msg: "Todo Deleted..."
        }))
    };
    return (<ListItem key={id}>
        {edit ? <TextField value={textUpdate} onChange={(e) => setTextUpdate(e.target.value)} /> : <ListItemText primary={text} />}
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit"
                onClick={() => handleEditPress(id, text)}>
                {edit ? <UpdateIcon /> : <EditIcon />}
            </IconButton>
            <IconButton edge="end" aria-label="delete"
                onClick={() => handleDeleteTodo(id)}
            >
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);
}

export default TodoListItem;