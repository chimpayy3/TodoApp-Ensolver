import React from 'react';
import Listitems from './Listitems'

const Lists = ({lists,updateList,deleteList,tasks})=>{
    return lists.map(list => <Listitems key={list.id} deleteList={deleteList} list={list} tasks={tasks}/>)    
}

export default Lists