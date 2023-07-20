const ToDoList = ({ tasks, handleDeleteTask }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.description}
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;