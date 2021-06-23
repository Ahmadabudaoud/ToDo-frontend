import { useSelector } from "react-redux";

//table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Task from "./Task";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});



const Today = ({task}) => {
    const days =
    (new Date(task.deadline).getTime() - new Date().getTime()) / 86400000;
  const time = (days % 1) * 24;

  let passed = Math.ceil(days) === 1;
  console.log(passed,"time")

  const classes = useStyles();
  const tasks = useSelector((state) => state.tasks);
  const taskList = tasks
    .filter((task) => !task.status && passed)
    .map((task) => <Task task={task} key={task.id} />);
    
  return (
    <>
    <TableContainer component={Paper} style={{backgroundColor:"#2d2e2e"}}>
      <h3 style={{textAlign: "center", marginTop: "20px",color:"#64dfdf"}}>Today's Tasks</h3>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>{taskList}</TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
};

export default Today;