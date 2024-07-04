import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

const TodoList = ({ todos, currTodo ,setTodos}) => {
  const handleDelete = currTodoValue => {
    const updatedTodoList = todos.filter(currTask => currTask != currTodoValue);
    setTodos(updatedTodoList);
  };
  return (
    <li className=" w-[50vw]  flex justify-between px-20 py-2 rounded-full items-center text-xl my-2 bg-white flex-wrap">
      {currTodo}
      <div className="flex gap-3">
        <button>
          <FaCheckCircle className="text-gray-400" />
        </button>
        <button onClick={() => handleDelete(currTodo)}>
          <FaTrashAlt className="text-red-400" />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
