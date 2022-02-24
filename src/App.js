import './App.css';
import Input from './Components/Input';
import Task from './Components/Task';
import Tasklist from './Components/Tasklist';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    if (name !== '') {
      const newTask = { name: name, id: uuidv4(), completed: false };
      setTasks([...tasks, newTask]);
    } else {
      console.log('Missing Input');
    }
  };

  const deleteTask = (id) => {
    const taskList = tasks;
    const updatedList = taskList.filter((task) => task.id !== id);
    setTasks(updatedList);
  };

  const completeTask = (id) => {
    const taskList = tasks;
    const index = taskList.findIndex((element => element.id===id))
    taskList[index].completed=true;
    setTasks(taskList);
    console.log("task index", taskList[index].completed)
  }

  return (
    <div className="App">
      <Input addTask={addTask} />
      <Tasklist tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
      
    </div>
  );
}

export default App;
