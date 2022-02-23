import React, { useRef } from 'react';

function Input({ addTask }) {
  const taskInput = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = taskInput.current.value;
    addTask(newTask);
  };
  return (
    <>
      <div>Input</div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="add"
          name="text"
          className="todo-input"
          ref={taskInput}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}

export default Input;
