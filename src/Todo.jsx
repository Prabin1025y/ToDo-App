import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import AddTaskForm from "./components/AddTaskForm";
import TodoList from "./components/TodoList";
const Todo = () => {
  const [inputVal, setinputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateStringState, setDateStringState] = useState("");
  // const [currentButtonClass, setCurrentButtonClass] = useState("text-gray-400");

  useEffect(() => {
    const inetrval = setInterval(() => {
      const currentDate = new Date();
      const dateString = `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`;
      setDateStringState(dateString);
    }, 1000);

    return () => clearInterval(inetrval);
  }, []);

  return (
    <section className="flex flex-col  items-center h-screen">
      <h1 className="text-4xl my-5 text-white font-bold">Todo List</h1>
      <h1 className="text-white text-xl font-bold">{dateStringState}</h1>
      <AddTaskForm setTodos={setTodos} inputVal={inputVal} setinputVal={setinputVal} todos={todos} />

      <section className="h-auto overflow-auto">
        <ul className="flex flex-col items-center">
          {todos.map((currTodo, index) => (
            <TodoList key={index} todos={todos} currTodo={currTodo} setTodos={setTodos} />
          ))}
        </ul>
      </section>
      <button onClick={() => setTodos([])} className="bg-red-500 mt-6 text-white font-bold rounded-lg px-5 py-2">
        Clear All
      </button>
    </section>
  );
};

export default Todo;
