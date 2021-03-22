import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const AddTodos = () => {
  return (
    <div>
      <TextField />
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </div>
  );
};

export default AddTodos;
