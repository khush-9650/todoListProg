import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "React JS", completed: false },
  { id: 2, title: "Tailwind", completed: false },
  { id: 3, title: "Node JS", completed: true },
  { id: 4, title: "Next JS", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

    // addTodo: (state, action) => {
    //   state.push(action.payload);
    // },

    addTodo: {
      reducer: (state, action) => {
        console.log("reducer run", action);
        state.push(action.payload);
      }
      ,
      prepare: (title) => {
        console.log("prepare run");
        return {
          payload: {
            title: title,
            id: crypto.randomUUID(),
            completed: false,
          }
        };
      }
    },


    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
