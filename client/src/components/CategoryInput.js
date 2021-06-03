import React,{useRef} from 'react';
import './TaskInput.css'

const CategoryInput = ({createTakList,onClick})=>{
    const listInput = useRef('');
    const listColor = useRef('');

    const hadlesUbmit = (e) =>{
        e.preventDefault();
        createTakList(listInput.current.value,listColor.current.value);
        listInput.current.value ='';
        listColor.current.value ='';
        onClick(e);
    }

    return (
        <div className = "popup">
            <button className="btn-close" onClick={onClick} >x</button>
            <form onSubmit={hadlesUbmit}>
                <div className="cube">
                    <input type="text" placeholder={"Name"} ref={listInput} required className="input"/>
                    <input type="text" placeholder={"Color"} ref={listColor} required  className="input"/>
                    <input type="submit" className="btn" value={"Create"}/>
                </div> 
            </form>
        </div>
    )  
}

export default CategoryInput