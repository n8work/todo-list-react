import React from 'react';

function Tasklist({ tasks, deleteTask }) {
  const handleDelete = (id) => {
    deleteTask(id);
  };
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} tasks={tasks} className="task">
            {task.name}
            <button
              type="button"
              onClick={() => handleDelete(task.id)}
              className="btn"
            >
              Delete
            </button>
            <button className="btn">Done</button>
            <button className="btn">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
