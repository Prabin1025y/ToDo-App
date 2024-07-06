import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

const TodoList = ({ todos, currTodo, setTodos }) => {
  const handleDelete = currTodoValue => {
    const updatedTodoList = todos.filter(currTask => currTask != currTodoValue);
    setTodos(updatedTodoList);
  };

  const handleChecked = currTodoValue => {
    const newTodosArray = todos.map(element => {
      if (element.id === currTodo.id) return { ...currTodoValue, checked: !currTodoValue.checked };
      else return element;
    });
    setTodos(newTodosArray);
  };
  return (
    <li className={` w-[50vw]  flex justify-between px-20 py-2 rounded-full items-center text-xl my-2 bg-white flex-wrapc ${currTodo.checked ? "line-through" : "no-underline"}`}>
      {currTodo.content}
      <div className="flex gap-3">
        <button onClick={() => handleChecked(currTodo)}>
          <FaCheckCircle className={currTodo.checked ? "text-green-400" : "text-gray-400"} />
        </button>
        <button onClick={() => handleDelete(currTodo)}>
          <FaTrashAlt className="text-red-400" />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
