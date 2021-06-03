import React,{useState} from 'react';
import TaskUpdate from'./TaskUpdate'
import AddToList from './AddToList'
import './TaskItem.css'

const TaskItem = ({task,lists,updateTask,deleteTask,addTaskToList})=>{

    const [opens, setOpens] = useState(false);      
    var color ="";
    const [listopens, setListOpens] = useState(false);

    const handleClose = (e) =>{
        e.preventDefault();
        setOpens(false);
    }

    const handleListClose = (e) =>{
        e.preventDefault();
        setListOpens(false);
    }

    function handleDelte(e) {
        e.preventDefault();
        deleteTask(task.id)
    } 

    if(lists){
        for(let element of lists){
            if(element.color){
                if (task.list_id == element.id){
                    color = element.color;
                }
            }
        }  
    }

    return(
        <div className="cardItem">
            <div className="card" style={{backgroundColor: color? color:""}} >
            <>
                        {/* click of button toggles `open` value therefore visibility */}
                        <button
                            onClick={() => setListOpens(!listopens)}
                            type="button"
                            className="addtoList"
                            data-toggle="modal"
                        >
                            V
                        </button>
                        {/* If open is true show your <div /> */}
                        {listopens && (
                            <div className="overlay">
                                <AddToList lists={lists} task={task} addTaskToList={addTaskToList} handleListClose={handleListClose}/>
                            </div>
                        )}
                        </>
                <div className="taskItem" >
                    <div className="taskName">{task.nombre}</div>
                    <div className="taskDesc">{task.descripcion}</div>
                </div>
                <div className="extraContent">
                    <div className="buttons">
                                <>
                        {/* click of button toggles `open` value therefore visibility */}
                        <button
                            onClick={() => setOpens(!opens)}
                            type="button"
                            className="update"
                            data-toggle="modal"
                        >
                            Update
                        </button>
                        {/* If open is true show your <div /> */}
                        {opens && (
                            <div className="overlay">
                            <TaskUpdate taskId={task.id} updateTask={updateTask} onClick={handleClose}/>
                            </div>
                        )}
                        </>
                        <button className ="delete" onClick = {handleDelte}>Delete</button>
                    </div>
                </div>              
            </div>
        </div>
    )   
}

export default TaskItem