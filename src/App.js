import React,{useState,useEffect} from "react";
import {Todos} from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
     initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

const onDelete=(todo)=>{
  console.log("I am ondelete",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));
}

const addTodo=(title,desc)=>{
  console.log("We add Data",title,desc);
  let sno;
  if(todos.length===0)
  {
    sno=0;
  }else{
     sno=todos[todos.length-1].sno+1;

  }
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,
  }
    setTodos([...todos,myTodo]);

}

  const [todos, setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])
  return (
    <>
      
      <AddTodo addTodo={addTodo}/>
      <Todos name="Todos List" todos={todos} onDelete={onDelete}/>
    
    </>

  );
}

export default App;