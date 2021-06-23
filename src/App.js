import { Route, Switch } from "react-router-dom";
// Components
import FinishedTasks from "./components/FinishedTasks";
import UnFinishedTasks from "./components/UnFinishedTasks";
import TaskForm from "./components/TaskForm";
import Today from "./components/Today"
import AddButton from "./components/Buttons/AddButton";
const primary = "#081c15" 

function App() {
  return (
    
    <Switch>
      
      <Route exact path="/">
        <div className="home" style={{textAlign:"center",backgroundColor:primary,color:"#64dfdf",padding: "1rem",}}> 
      < div >
      <h1>To Do List :</h1>
    </div>
    <div className="mt-3" style={{textAlign:"center",backgroundColor:primary,color:"#64dfdf",}}>
      <AddButton />
      
    </div></div>
        <div
          className="p-3 mb-2 text-white"
          style={{ backgroundColor: primary }}
        >
          <div className="container mt-5" style={{ height: "100%",marginBottom:"100%", }}>
            <div className="row">
              <div class="col">
                <UnFinishedTasks />
              
              </div>
              
              <div class="col">
                <FinishedTasks />
              </div>
              
            </div>
          </div >
        </div>
      </Route>
      <Route path="/form">
        <div
          className="p-3 mb-2 text-black"
          style={{ backgroundColor: primary, marginBottom:"100%"}}
        >
          <div className="bottom" style={{marginBottom:"100%"}}>
          <TaskForm />
          </div>
        </div>
      </Route>
      
    </Switch>
  );
}

export default App;
