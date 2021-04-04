import '../App.css';
import Alert from "./Alert";
import { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { addTodo, showAlert, hideAlert } from "../react-redux/action";
import { useDispatch, useSelector } from "react-redux";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const oAlert = useSelector(({ alertVisibility }) => alertVisibility);

  const handleAddTodo = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
      dispatch(showAlert({
        type: 'success',
        msg: 'Todo added...'
      }));
    } else {
      dispatch(showAlert({
        type: 'error',
        msg: 'Enter a valid Todo..'
      }));
    }
    setInputText('');
  };

  //console.log(inputText);
  return (
    <>
      <div className="addTodo">
        <TextField
          /** Custom Styling for Material Ui component */
          style={{
            margin: "0 12px 0 0"
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          autoFocus={true}
          fullWidth={true}
          placeholder="Enter a new To-Do..." />
        <Button
          className="save-btn"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          onClick={handleAddTodo}
        >
          Save
      </Button>
      </div >
      {oAlert.isVisible && <Alert {...oAlert} />}
    </>

  );
};

export default AddTodos;
