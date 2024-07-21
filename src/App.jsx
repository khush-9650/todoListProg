import { useReducer, createContext, useContext } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

export const TodosContext = createContext();
function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "React JS", completed: false },
  //   { id: 2, title: "Tailwind", completed: false },
  //   { id: 3, title: "Node JS", completed: true },
  //   { id: 4, title: "Next JS", completed: false },
  // ]);
  // function addTodo(newTodo) {
  //   setTodos((prev) => [...prev, newTodo]);
  // }
  // function removeTodo(id) {
  //   console.log(id);
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // }
  // function toggleCompleted(id) {
  //   setTodos((prev) =>
  //     prev.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // }

  const initialState = [
    { id: 1, title: "React JS", completed: false },
    { id: 2, title: "Tailwind", completed: false },
    { id: 3, title: "Node JS", completed: true },
    { id: 4, title: "Next JS", completed: false },
  ];

  const reducer = (todos, action) => {
    if (action.type === "ADD_TODO") {
      return [...todos, action.payload];
    }
    if (action.type === "DELETE_TODO") {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "TOGGLE_COMPLETED") {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    }
    return todos;
  };

  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      <h1 className="text-4xl text-center text-white mt-10">Todo List</h1>
      <TodoForm />
      <Todos />
    </TodosContext.Provider>
  );
}

export default App;
