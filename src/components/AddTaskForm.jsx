const AddTaskForm = ({ setinputVal, setTodos, inputVal, todos }) => {
  const handleFormSubmit = e => {
    e.preventDefault();

    if (inputVal === "") return;

    if (todos.includes(inputVal)) return alert("Task already exists");
    console.log( );

    setTodos([...todos, inputVal]);
    setinputVal("");
  };

  const handleInput = e => {
    setinputVal(e.target.value);
  };

  return (
    <section className=" w-1/2 p-10 flex justify-center">
      <form className="flex" onSubmit={handleFormSubmit}>
        <input className="h-10 w-96 rounded-l-full p-3" value={inputVal} onChange={handleInput} type="text" placeholder="Write your task" />
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
