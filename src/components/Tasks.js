import Task from "./Task";
const Tasks = ({ tasks,deleteTask,toggleTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task deleteTask={deleteTask} toggleTask={toggleTask} key={task.id} task={task}></Task>
      ))}
    </div>
  );
};

export default Tasks;
