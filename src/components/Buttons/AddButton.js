import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/form" style={{textDecoration: "none"}}>
      <Button variant="contained" style={{width: "100%"}}>
        Add Task
      </Button>
    </Link>
  );
};

export default AddButton;