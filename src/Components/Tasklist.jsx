import React from 'react';

function Tasklist({ tasks, deleteTask, completeTask }) {

  const handleDelete = (id) => {
    console.log("click delete");
    deleteTask(id);
  };

  const handleComplete = (id) => {
    console.log("click done");
    completeTask(id);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (

          <li key={task.id} className={`task ${task.completed ? "done" : ""}`}>
            {task.name}
            <button
              type="button"
              onClick={() => handleDelete(task.id)}
              className="btn"
            >
              Delete
            </button>
            <button onClick={() => handleComplete(task.id)} className="btn">
              Done
            </button>
            <button className="btn">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
