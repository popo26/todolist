import React, { useState } from 'react';

function CreateTodo(props){

    const [todo, setTodo] = useState({
        
        content: ""
    });

    
    function handleChange(event){
        const {name, value } = event.target;
         
        setTodo(prevTodo => {
            return {
                ...prevTodo,
                [name]:value
            };
        });

    }

    function submitTodo(event){
        props.onAdd(todo.content);
        setTodo({content: ""});
        event.preventDefault();
    }

  

    return (
        <div className="todoform">
            <form>
            <div class="form-group">
            <textarea 
            onChange={handleChange} 
            name = "content"
            class="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="What's your agenda?"
            value = {todo.content}
            date = {props.date}
            
             />
            </div>
            <button onClick={submitTodo} type="button" class="btn btn-secondary">Add</button>
            </form>
        </div>
    )
}

export default CreateTodo;