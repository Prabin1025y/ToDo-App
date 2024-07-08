import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

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
    <>
      <li className=" w-[50vw] px-10 py-2 rounded-[30px]  my-2 bg-white">
        <section className={`  flex justify-between  items-center text-xl  ${currTodo.checked ? "line-through" : "no-underline"}`}>
          <div className="flex gap-3">
            <button>
              <FiChevronDown />
            </button>
            <h1 className="text-wrap">{currTodo.content}</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleChecked(currTodo)}>
              <FaCheckCircle className={currTodo.checked ? "text-green-400" : "text-gray-400"} />
            </button>
            <button onClick={() => handleDelete(currTodo)}>
              <FaTrashAlt className="text-red-400" />
            </button>
          </div>
        </section>
      </li>
    </>
  );
};

export default TodoList;
