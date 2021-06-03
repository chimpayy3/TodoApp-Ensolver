import React,{useState} from 'react';

const TaskUpdate = ({task,lists,addTaskToList,handleListClose})=>{

    const [select,setSelect] = useState(lists[0]? lists[0].id: "" );

    const hadlesUbmit = (e) =>{        
        e.preventDefault();
        addTaskToList(task.id,select);
        handleListClose(e)
    }

    const hadleChange = (e)=>{
        const selectedList = e.target.value;
        setSelect(selectedList);
    }
    return (
        <div className = "popup">
            <button className="btn-close" onClick={handleListClose}>x</button>
                <div className="cube">
                    <div className="list">
                        <select className="select" value={select} onChange={hadleChange}> 
                        {lists.map(list=><option key={list.id} value={list.id} >{list.nombre}</option>)}                    
                        </select>
                    </div>
                    <button className="btn" onClick={hadlesUbmit}>Add</button>
                </div> 
        </div>
    )  
}

export default TaskUpdate