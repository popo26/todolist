import React, { useState } from "react";
import Calendar from 'react-calendar';
import './calendar.css';
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import EachItem from "./EachItem";


function App(){

    const [date, setDate] = useState(new Date());
    date.setHours(0,0,0,0);
      
    const [todos, setTodos] = useState([]);
    
    const onChange = date => {setDate(date)};   
    
    

    function addTodo(content) {
        setTodos(previousTodos => {
        return [...previousTodos, {date, content}];
        
        });
    }

    // function filterTodos(date) {
    //     setTodos(todos => todos.filter(todo => todo.date === date
    //         )
    //     )}

    function deleteTodo(id){
        setTodos(prevTodos => {
            return prevTodos.filter((todo, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
      <Header />  
        <div className="app">
        <div className="calendar-container">
            <Calendar 
            onChange={onChange} 
            value={date}
            
            />
            {/* {console.log(date)} */}
        </div>
        <div className="text-center">
            {date.toDateString()}
        </div>
            <CreateTodo 
            onAdd={addTodo}
            date={date}
            />
        

            
          <div>
          <h1>Whole items: </h1>

            {todos.map((todoItem, index) => {
                return (
                    <EachItem 
                        key={index}
                        id={index}
                        content={todoItem.content}
                        onDelete={deleteTodo}
                        date={todoItem.date}
                        
                    />
                );
            })}
            </div>


            {/* <div>
            <h1>Date specific items: </h1>
            {todos.filter(todo => todo.date === date)
                  .map((todo, index) => {
                console.log("todo is " + todo);
                console.log("todos is " + todos);
                console.log("todoItem.content is " + todo.content);
                console.log("todoItem.date is " + todo.date);
                console.log("date is " + date );
                return ( 
                    <EachItem 
                        key={index}
                        id={index}
                        content={todo.content}
                        onDelete={deleteTodo}
                        date={todo.date}
                    />
                );
            })}

            {console.log(todos)}
            {console.log("date is " + date )}
            

            </div> */}
            </div>
            </div>
    
    );
}

export default App;