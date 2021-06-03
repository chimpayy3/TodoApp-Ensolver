import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Task from "./components/Task";
import Lists from "./components/List";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import CategoryInput from './components/CategoryInput'
import './App.css';

function App() {
  const [tasks, setTasks] = useState("");
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [lists, setLists] = useState("");
  
  useEffect(() =>{  
    getTasks();
    getTaskLists();
  },[])

  const getTasks = async  () => {
    const res = await axios.get("http://localhost:4000/task");
    setTasks(res.data);
  }  
  const createTaks = async(name,description) => {
    await axios.post("http://localhost:4000/task",{name:name,description:description});
    getTasks();
  }  
  const updateTask = async(id,name,description) => {
    await axios.put("http://localhost:4000/task",{task_id:id,name:name,description:description});
    getTasks();
  } 
  const deleteTask = async(id) => {
    await axios.delete("http://localhost:4000/task",{data:{task_id:id}});
    getTasks();
  }

  const getTaskLists = async  () => {
    const res = await axios.get("http://localhost:4000/task/list");
    setLists(res.data);
  }  
  const createTakList = async(name,color) => {
    await axios.post("http://localhost:4000/task/list",{name:name,color:color});
    getTaskLists();
  }  
  const updateList = async(id,name,description) => {
    await axios.put("http://localhost:4000/task/list",{task_id:id,name:name,description:description});
    getTaskLists();
  } 
  const deleteList = async(id) => {
    await axios.delete("http://localhost:4000/task/list",{data:{task_id:id}});
    getTaskLists();
    getTasks();
  }

  const addTaskToList = async(taskId,listId) => {
    await axios.post("http://localhost:4000/task/addtolist",{task_id:taskId,id:listId})
    getTaskLists();
    getTasks();
  }

  const handleClose = (e) =>{
    e.preventDefault();
    setOpen(false);
    setOpenList(false);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="taskListContainer">
          <div className="heading">
            <h1>List of tasks</h1>
          </div>          <>
              {/* click of button toggles `open` value therefore visibility */}
              <button
                onClick={() => setOpenList(!openList)}
                type="button"
                className="btn"
                data-toggle="modal"
              >
                Create Category
              </button>
              {/* If open is true show your <div /> */}
              {openList && (
                <div className="overlay">
                  <CategoryInput createTakList={createTakList} onClick={handleClose}/>
                </div>
              )}
            </>
          <div className="tasks">          
            {lists ?<Lists  lists={lists} updateList={updateList} deleteList={deleteList} tasks={tasks}/> :<Preloader/>}
          </div>
        </div>
        <div className="taskContainer">
          <Header/>
          <>
              {/* click of button toggles `open` value therefore visibility */}
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="btn"
                data-toggle="modal"
              >
                New Task
              </button>
              {/* If open is true show your <div /> */}
              {open && (
                <div className="overlay">
                  <TaskInput createTaks={createTaks} onClick={handleClose}/>
                </div>
              )}
            </>
          <div className="tasks">          
            {tasks ?<Task  lists={lists} tasks={tasks} addTaskToList={addTaskToList} updateTask={updateTask} deleteTask={deleteTask}/> :<Preloader/>}
          </div>
        </div>
      </div>   
    </div>
  );
}

export default App;
