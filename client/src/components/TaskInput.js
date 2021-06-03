import React,{useRef} from 'react';
import './TaskInput.css'

const TaskInput = ({createTaks,onClick})=>{
    const taskInput = useRef('');
    const taskDescription = useRef('');

    const hadlesUbmit = (e) =>{
        e.preventDefault();
        createTaks(taskInput.current.value,taskDescription.current.value);
        taskInput.current.value ='';
        taskDescription.current.value ='';
        onClick(e);
    }

    return (
        <div className = "popup">
            <button className="btn-close" onClick={onClick} >x</button>
            <form onSubmit={hadlesUbmit}>
                <div className="cube">
                    <input type="text" placeholder={"Name"} ref={taskInput} required className="input"/>
                    <input type="text" placeholder={"Description"} ref={taskDescription} className="input"/>
                    <input type="submit" className="btn" value={"Create"}/>
                </div> 
            </form>
        </div>
    )  
}

export default TaskInput