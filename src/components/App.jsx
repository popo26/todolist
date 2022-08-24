import React, { useState } from "react";
import Calendar from 'react-calendar';
import './calendar.css';
import CreateTodo from "./CreateTodo";
import EachItem from "./EachItem";

function App(){

    const [date, setDate] = useState(new Date());
    const [todos, setTodos] = useState([]);

    function addTodo(newItem) {
        setTodos(previousTodos => {
            return [...previousTodos, newItem];
        });
    }

    function deleteTodo(id){
        setTodos(prevTodos => {
            return prevTodos.filter((todo, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
        <header><h1>To Do List</h1></header>
            
 
  <div className="app">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
    <CreateTodo onAdd={addTodo}/>
    {todos.map((todoItem, index) => {
        return (
            <EachItem 
                key={index}
                id={index}
                content={todoItem.content}
                onDelete={deleteTodo}
            />
        );
    })}

    
    </div>
   
    
    </div>
    
    );
}

export default App;