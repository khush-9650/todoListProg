import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const { todos } = useSelector((state) => {
    return state;
  });
  return (
    <div className="flex flex-col mt-6 px-7">
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todos;
