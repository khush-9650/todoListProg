import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/Reducer/todosSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const newTodo = {
    //   title: title,
    //   id: crypto.randomUUID(),
    //   completed: false,
    // };
    dispatch(addTodo(title));
    setTitle("");  // Reset the input field
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-4 border-sky-500 w-[50%] my-7 translate-x-[50%] bg-white rounded-md"
    >
      <input
        type="text"
        className="w-[80%] h-full text-xl outline-none px-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="w-[20%] bg-black text-white py-3"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
