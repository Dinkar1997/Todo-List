import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>{props.name}</h3>
            {props.todos.length===0?"No todo to display":
            props.todos.map((todo)=>{
             return( <>
                
             <TodoItem todo={todo} onDelete={props.onDelete}/><hr/>
             </>
             )
            })
            }
        </div>
    )
}
