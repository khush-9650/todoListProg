import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../store/Reducer/todosSlice";

function Todo({ id, title, completed }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodo({ id }));
  }

  function handleToggleCompleted() {
    dispatch(toggleCompleted({ id }));
  }

  return (
    <div className="flex mt-2 px-8 w-[55%] m-auto justify-between items-center">
      <div className="text-white text-xl font-medium flex gap-10 py-2">
        <input
          className="accent-white w-5"
          type="checkbox"
          checked={completed}
          onChange={handleToggleCompleted}
        />
        <p
          className="text-white"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {title}
        </p>
      </div>
      <div
        className="text-xl font-bold text-white cursor-pointer"
        onClick={handleDelete}
      >
        X
      </div>
    </div>
  );
}

export default Todo;
