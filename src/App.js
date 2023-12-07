import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";
import ChangeDeadline from "./components/ChangeDeadline";
import Count from "./components/Count";

// function Test(){
//   const squareElement = useRef();
//   const positionateBlock = (percent) =>{
//     squareElement.current.style.marginLeft=`max(0px, calc(${percent}% - 100px))`
//   }

//   return (
//     <>
//       <input type="range" min={0} max={100} onChange={(e) => {positionateBlock(e.target.value)}}/>
//       <div onMouseMove={(e) => {positionateBlock(e.nativeEvent.layerX / e.currentTarget.clientWidth * 100)}}>
//         <div className="square" ref={squareElement} ></div>
//       </div>
//     </>
//   )
// }

export default function App() {
  const [todos, setTodos] = useState([]);
  const [lastId, setLastId] = useState(0);
  
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos').then(response  => response.json()).then((loadedTodos) => setTodos(loadedTodos.map((todo) =>({
  //     text: todo.title,
  //     date: new Date(),
  //     deadline: null,
  //   }))))
  // },[])

  const onCreateTodo = (event) => {
    const deadlineString = event.target.elements["search-form__date"].value; 

    todos.push({
      text: event.target.elements["search-form__input"].value,
      completed: false,
      id: lastId,
      date: new Date(),
      deadline: deadlineString !== "" ? new Date(deadlineString) : null,
    });

    setLastId(lastId + 1);
    setTodos([...todos]);
    event.target.elements["search-form__input"].value = '';
    event.target.elements["search-form__date"].value = '';

  };
  console.log(todos);
  

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
  };

  
  const switchTodo = (index) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  };

  const changeTodo = (index, text) => {
    todos[index].text = text;
    setTodos([...todos]);
  };

  const  isDeadlineComplited = (index) => {
    if(todos[index].deadline !== null && todos[index].deadline < new Date()){
      return true
    } 
    return false;
  }
  
  // -----------------------------------------------------------------------------modal-deadline-------------------------------------------------------------------------------------//

  const openModalNewDeadline = () => {
    const calendar = document.querySelector(".calendar");
    calendar.style.display = 'flex';
  }

  const closeModalNewDeadline = (newDeadline,index) => {
    const calendar = document.querySelector('.calendar');
    calendar.style.display = 'none';
  
    const year = newDeadline.getFullYear();
    const month = newDeadline.getMonth();
    const day = newDeadline.getDate()+1;
  
    const formattedDeadline = new Date(year, month, day).toISOString().split('T')[0];

    if (todos.length > index) {
      const updatedTodos = [...todos];
      updatedTodos[index].deadline = formattedDeadline;
      setTodos(updatedTodos);
    }
  }

  return (
    <>
    {/* <Test/> */}
      <header>
        <h1 className="logo">My to-do list</h1>
      </header>
      <main>
        <TodoCreateForm onSubmit={onCreateTodo}/>
        <TodoList
          list={todos}
          onDeleteTodo={deleteTodo}
          onSwitchTodo={switchTodo}
          onChangeTodo={changeTodo}
          onDeadlineComplited={isDeadlineComplited}
          onOpenModalNewDeadline={openModalNewDeadline}
        />
        <ChangeDeadline
          onCloseModalNewDeadline={closeModalNewDeadline}
        />
        {/* <Count /> */}
      </main>
    </>
  );
}

export function Fanil() {
  return (
    <div>
      <h1>Fanil</h1>
    </div>
  );
}
