import React from "react";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import AppContext from "../store/context";
import "./todoList.scss";

function TodoList() {
  const data = useContext(AppContext);
  console.log(data);
  const { state } = useContext(AppContext);

  return (
    <div className="todo-wrapper">
      <div className="todo-list">
        <h3>Your Todos</h3>
        {state.map((todo) => {
          return <TodoItem data={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
