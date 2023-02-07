import React, { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import AppContext from "../store/context";
import "./todoItem.scss";

function TodoItem({ data }) {
  console.log(data);
  const { dispatch } = useContext(AppContext);

  const handleRemoveTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: data });
  };

  const handleToggleStatus = () => {
    dispatch({ type: "TOGGLE_STATUS", payload: data });
  };
  return (
    <div className="todo-item">
      {data.content}
      <div className="todo-icons">
        <i onClick={handleToggleStatus}>
          {data.status ? <FcCheckmark /> : <FcCancel />}
        </i>
        <i onClick={handleRemoveTodo}>
          <CiCircleRemove />
        </i>
      </div>
    </div>
  );
}

export default TodoItem;
