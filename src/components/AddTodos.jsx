import '../App.css';
import Alert from "./Alert";
import { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { addTodo } from "../react-redux/action";
import { useDispatch } from "react-redux";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [alert, setAlert] = useState({
    msg: '',
    isVisible: false,
    type: ''
  });

  const handleAddTodo = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
      handleAlert(true, "Todo added...", 'success');
    } else {
      handleAlert(true, 'Enter a valid Todo..', 'error');
    }
    setInputText('');
  };

  /**
   * Function to handle Alert component rendering 
   */
  const handleAlert = (isVisible = false, msg = "", type = "") => {
    setAlert({ isVisible, type, msg });
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
          placeholder="Enter a new To-Do" />
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
      {alert.isVisible && <Alert {...alert} removeAlert={handleAlert} />}
    </>

  );
};

export default AddTodos;
