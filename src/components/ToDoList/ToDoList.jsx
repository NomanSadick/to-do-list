// eslint-disable-next-line react/prop-types
const ToDoList = ({ tasks, handleDeleteTask }) => {
    return (
        <ul className="mt-4">
            {tasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between p-4 mb-4 bg-blue-100 rounded-md">
                    <span className="text-lg text-blue-800">{task.description}</span>
                    <button
                        className="px-2 py-1 text-red-500 bg-white rounded hover:bg-red-500 hover:text-white"
                        onClick={() => handleDeleteTask(task.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;