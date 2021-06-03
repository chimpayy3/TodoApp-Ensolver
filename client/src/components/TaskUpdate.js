import React,{useRef} from 'react';
import './TaskInput.css'

const TaskUpdate = ({taskId,updateTask,onClick})=>{
    const taskUpdate = useRef('');
    const taskDescription = useRef('');

    const hadlesUbmit = (e) =>{        
        e.preventDefault();
        updateTask(taskId,taskUpdate.current.value,taskDescription.current.value);      
        taskUpdate.current.value ='';
        taskDescription.current.value ='';
        onClick(e);
    }

    return (
        <div className = "popup">
            <button className="btn-close" onClick={onClick} >x</button>
            <form onSubmit={hadlesUbmit}>
                <div className="cube">
                    <input type="text" placeholder={"Name"} ref={taskUpdate} required className="input"/>
                    <input type="text" placeholder={"Description"} ref={taskDescription} className="input"/>
                    <input type="submit" className="btn" value={"Update"}/>
                </div> 
            </form>
        </div>
    )  
}

export default TaskUpdate