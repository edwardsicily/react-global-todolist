import { useReducer, useState, useEffect, useContext } from "react";
import todolistInitialState from "./store/initialState";
import todoReducer from "./store/reducers";
import "./App.css";
import AppContext from "./store/context";
import Input from "./input/Input";
import TodoList from "./todoItem/TodoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, todolistInitialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Input />
        <div className="todo-wrapper">
          <TodoList />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
