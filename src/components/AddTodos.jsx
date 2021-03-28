import { useState } from 'react';
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const AddTodos = ({handleInputText}) => {
  const [inputText, setInputText] = useState('');
  const inputTextField = (e) => {
    setInputText(e.target.value);
  }
  console.log(inputText);
  return (
    <div>
      <TextField onChange={inputTextField} />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={()=>handleInputText(inputText)}
      >
        Save
      </Button>
    </div>
  );
};

export default AddTodos;
