import React from 'react';
import Taskitem from './Taskitem'

const Task = ({tasks,lists,updateTask,deleteTask,addTaskToList})=>{
    return tasks.map(task => <Taskitem key={task.id} lists={lists} addTaskToList={addTaskToList} task={task} updateTask={updateTask} deleteTask={deleteTask}/>)    
}

export default Task