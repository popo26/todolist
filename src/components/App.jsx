import React, { useState } from "react";
import Calendar from 'react-calendar';
import './calendar.css';
import Header from "./Header";
import CreateTodo from "./CreateTodo";
import EachItem from "./EachItem";

function App(){

    const [date, setDate] = useState(new Date());
    const [todos, setTodos] = useState([]);
       
    const onChange = date => {setDate(date);}
    
    // console.log(todos);

    function addTodo(content) {
        setTodos(previousTodos => {
        return [...previousTodos, [date, content]];
        
        });
    }

    function deleteTodo(id){
        setTodos(prevTodos => {
            return prevTodos.filter((todo, index) => {
                return index !== id;
            });
        });

  
    

    // function filterDate(date) {
    //     setTodos(prevValues => {
    //         return prevValues.filter((todo) => {
    //             return todo.date ==={date};
    //         });
    //     });
    // }

   
    }

    return (
        <div>
      <Header />  
        <div className="app">
        <div className="calendar-container">
            <Calendar onChange={onChange} value={date}/>
            {/* {console.log(date)} */}
        </div>
        <div className="text-center">
            {date.toDateString()}
        </div>
            <CreateTodo 
            onAdd={addTodo}
            date={date}
            />
         
            {/* {todos.map((todoItem, index) => {
                {console.log("todoItem.content is" + " " + todoItem.content)}
                
                return (
                    <EachItem 
                    
                        key={index}
                        id={index}
                        content={todoItem.content}
                        onDelete={deleteTodo}
                        date={todoItem.date}
                    />
                );
            })} */}
            <div>


           {/* {todos.map((todoItem, index) => {    
            console.log("todoItem.content is " + todoItem.content);
                console.log("todoItem.date is " + todoItem.date);
                console.log("date is " + date ); 
                console.log("todos is " + todos );   
                console.log("index is " + index );             
                return todoItem
                  
                ;
            }).filter((todoItem, index) => todoItem.date === {date} &&  
                <EachItem 
                        key={index}
                        id={index}
                        content={todoItem.content}
                        onDelete={deleteTodo}
                        
                    />)
            }  */}

            {todos.filter((todo, index) => {
                console.log("todoItem.content is " + todo.content);
                console.log("todoItem.date is " + todo.date);
                console.log("date is " + date ); 
                console.log("todos is " + todos );   
                console.log("index is " + index );  
                if (todo.includes({date})) {
               
                   return( <EachItem 
                        key={index}
                        id={index}
                        content={todo.content}
                        onDelete={deleteTodo}  
                    />);
                } else {
                    console.log("failure");
                }
            })}


            {/* {todos.filter(todoItem => todoItem.date === {date}).map((todoItem, index) => {    
                console.log("todoItem.content is " + todoItem.content);
                console.log("todoItem.date is " + todoItem.date);
                console.log("date is " + date );
                return (
                    
                    <EachItem 
                        key={index}
                        id={index}
                        content={todoItem.content}
                        onDelete={deleteTodo}
                        date={todoItem.date}
                    />
                );
            })}  */}




          
            </div>
            </div>
            </div>
    
    );
}

export default App;