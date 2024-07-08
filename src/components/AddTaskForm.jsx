import { useEffect } from "react";

const AddTaskForm = ({ setinputVal, setTodos, inputVal, todos }) => {
  useEffect(() => {
    //Adding Date to local storage
    localStorage.setItem("reactTodo", JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmit = e => {
    let isRepeatedTask = false;
    e.preventDefault();

    if (inputVal === "") return;

    todos.forEach(todo => {
      if (todo.content === inputVal) return (isRepeatedTask = true);
    });

    if (isRepeatedTask) return alert("Task Already Exists");

    // if (todos.includes(inputVal)) return alert("Task already exists");
    // console.log();
    const nowDate = new Date();
    const dateString = `${nowDate.toDateString()} ${nowDate.toLocaleTimeString()}`;

    setTodos([...todos, { id: Date.now(), content: inputVal, checked: false, time: dateString }]);

    setinputVal("");
  };

  const handleInput = e => {
    setinputVal(e.target.value);
  };

  return (
    <section className=" w-1/2 p-10 flex justify-center">
      <form className="flex" onSubmit={handleFormSubmit}>
        <input className="h-10 w-96 rounded-l-full p-3 focus:outline-none" value={inputVal} onChange={handleInput} type="text" placeholder="Write your task" />
        <div>
          <button className="h-10 px-4 bg-cyan-300 rounded-r-full hover:bg-cyan-600 transition duration-300" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddTaskForm;
