import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
const Todo = () => {
  const [inputVal, setinputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateStringState, setDateStringState] = useState("");
  const [currentButtonClass, setCurrentButtonClass] = useState("text-gray-400");

  const handleInput = e => {
    setinputVal(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (inputVal === "") return;

    if (todos.includes(inputVal)) return alert("Task already exists");
    setinputVal("");

    setTodos([...todos, inputVal]);
  };

  const handleChecked = e => {
    currentButtonClass === "text-gray-400" ? setCurrentButtonClass("text-green-500") : setCurrentButtonClass("text-gray-400");
    console.log(e.target);
  };

  const handleDelete = currTodoValue => {
    const updatedTodoList = todos.filter(currTask => currTask != currTodoValue);
    setTodos(updatedTodoList);
  };

  useEffect(() => {
    const inetrval = setInterval(() => {
      const currentDate = new Date();
      const dateString = `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`;
      setDateStringState(dateString);
    }, 1000);

    return () => clearInterval(inetrval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl my-5 text-white font-bold">Todo List</h1>
      <h1 className="text-white text-xl font-bold">{dateStringState}</h1>
      <section className="   w-1/2 p-10 flex justify-center">
        <form className="flex" onSubmit={handleFormSubmit}>
          <input className="h-10 w-96 rounded-l-full p-3" value={inputVal} onChange={handleInput} type="text" placeholder="Write your task" />
          <div>
            <button className="h-10 px-4 bg-cyan-300 rounded-r-full hover:bg-cyan-600 transition duration-300" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="h-auto overflow-auto">
        <ul className="flex flex-col items-center">
          {todos.map((currTodo, index) => (
            <li key={index} className=" w-[50vw]  flex justify-between px-20 py-2 rounded-full items-center text-xl my-2 bg-white flex-wrap">
              {currTodo}
              <div className="flex gap-3">
                <button onClick={handleChecked}>
                  <FaCheckCircle className={currentButtonClass} />
                </button>
                <button onClick={() => handleDelete(currTodo)}>
                  <FaTrashAlt className="text-red-400" />
                </button>
              </div>
            </li>
          ))}
          ;
        </ul>
      </section>
      <button onClick={() => setTodos([])} className="bg-red-500 mt-6 text-white font-bold rounded-lg px-5 py-2">
        Clear All
      </button>
    </section>
  );
};

export default Todo;
