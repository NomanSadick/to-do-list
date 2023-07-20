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
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-6">To-Do List</h1>
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="text"
              value={task}
              onChange={handleTaskChange}
              className="flex-grow border rounded px-4 py-2 outline-none mb-2 sm:mb-0 sm:mr-2"
              placeholder="Enter a new task..."
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white rounded px-4 py-2 w-full sm:w-auto"
            >
              Add Task
            </button>
          </div>
          <ToDoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        </div>
      </div>
    </>
  )
}

export default App
