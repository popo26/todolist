import React from "react";

function EachItem(props){

    function handleClick(){
        props.onDelete(props.id);
    }

   
   
    return (
        <div className="each-item">  
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default EachItem;