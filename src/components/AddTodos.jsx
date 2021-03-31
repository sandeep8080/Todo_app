import '../App.css';
import { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { addTodo } from "../react-redux/action";
import { useDispatch } from "react-redux";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
    }
    setInputText('');
  };

  //console.log(inputText);
  return (
    <div className="addTodo">
      <TextField className="textInput" value={inputText} onChange={(e) => setInputText(e.target.value)} />
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
  );
};

export default AddTodos;
