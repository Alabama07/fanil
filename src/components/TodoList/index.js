import "./TodoList.css";
import React, { useState } from "react";
import changeImg from '../../components/img-pencel.png'
import btndelete from '../../components/btn-delete.png'

const TodoList = ({ list, onDeleteTodo, onSwitchTodo, onChangeTodo,onDeadlineComplited,onOpenModalNewDeadline}) => {
 
  return (
    <ul>
      {list.map((item, index) => (
          <li key={item.id} className={item.completed ? "completed" :(onDeadlineComplited(index) ? "no-completed" : '')}>
                <div className="todo-list__item">
                  <input
                    disabled={item.completed}
                    defaultValue={item.text}
                    onChange={(e) => {
                      onChangeTodo(index, e.target.value);
                    }}
                    className="todo-list__input-text"
                  />
                  <button className="todo-list__btn-done" type="click" onClick={() => onSwitchTodo(index)}>
                    Done
                  </button>
                  <button className="todo-list__btn-delete" type="click" onClick={() => onDeleteTodo(index)}>
                    <img className="delete-img" src={btndelete} alt="вцф"/>
                  </button>
                </div> 
                <div className="todo-list__inf-block">
                  <div className="todo-list__item__date">
                      <span className="date-block__date">{'Date: ' + item.date.getDate() + "." + (item.date.getMonth()+1)}</span>
                      <span className="date-block__time">{ 'Time: '  + item.date.getHours() + ":" + item.date.getMinutes()}</span>
                  </div>
                  {item.deadline && (
                    <>
                      <span className="deadline">
                        {'Выполнить до:' + ' ' + item.deadline.getDate() + "." + (item.deadline.getMonth()+1)}
                          <button className="btn-change-deadline" 
                          onClick={onOpenModalNewDeadline}
                          >
                          <img className="change-img" src={changeImg} alt="вцф"/>
                        </button>
                      </span>
                    </>
                  )}
                </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
