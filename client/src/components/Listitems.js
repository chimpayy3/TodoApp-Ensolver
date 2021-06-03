import React,{useState} from 'react';
import ListUpdate from'./ListUpdate'

const Listitems = ({list,tasks,deleteList})=>{

    const [listTasks, setListTasks] = useState("");
    let listOfTask = [];
    const handleOpen = () => {
        tasks.map(task => {
            if(task.list_id == list.id){
                listOfTask.push(task);
            }
        })
        setListTasks(listOfTask)
        listOfTask = [];
        console.log(listTasks)
    }
    const handleClick =(e) =>{        
        e.preventDefault();
        deleteList(list.id);
    }

    return(
        <div className="cardItem">
            <div className="card" style={{backgroundColor: list.color? list.color:""}}>
            <button className="btn-delete" onClick={handleClick}>x</button>
                <div className="taskItem" >
                    <div className="taskName" onClick={handleOpen}>{list.nombre}</div>
                </div>             
            </div>
        </div>
    )   
}

export default Listitems