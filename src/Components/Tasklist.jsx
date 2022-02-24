import React from 'react';

function Tasklist({ tasks, deleteTask, completeTask }) {
  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (

          <li key={task.id} tasks={tasks} className={`task ${task.completed ? "done" : ""}`}>
            {task.name}{task.id}  Completed: {task.completed}
            <button
              type="button"
              onClick={() => handleDelete(task.id)}
              className="btn"
            >
              Delete
            </button>
            <button onClick={() => completeTask(task.id)} className="btn">Done</button>
            <button className="btn">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
