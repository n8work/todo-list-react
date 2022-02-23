import React from 'react';

function Tasklist({ tasks, deleteTask, id }) {
  const handleDelete = () => {
    console.log(id);
    deleteTask();
  };
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className="task">
            {task.name}
            <button onClick={handleDelete} className="btn">
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
