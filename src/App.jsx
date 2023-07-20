import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), description: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <div>
          <input type="text" value={task} onChange={handleTaskChange} />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ToDoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </>
  )
}

export default App
