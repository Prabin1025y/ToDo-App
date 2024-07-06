import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import AddTaskForm from "./components/AddTaskForm";
import TodoList from "./components/TodoList";
import DateTime from "./components/DateTime";
const Todo = () => {
  const [inputVal, setinputVal] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <section className="flex flex-col  items-center h-screen">
      <h1 className="text-4xl my-5 text-white font-bold">Todo List</h1>
      <DateTime />
      <AddTaskForm setTodos={setTodos} inputVal={inputVal} setinputVal={setinputVal} todos={todos} />

      <section className="h-auto overflow-auto">
        <ul className="flex flex-col items-center">
          {todos.map(currTodo => (
            <TodoList key={currTodo.id} todos={todos} currTodo={currTodo} setTodos={setTodos} />
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
