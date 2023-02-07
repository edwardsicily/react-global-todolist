const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_STATUS":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      });
  }
};

export default todoReducer;
