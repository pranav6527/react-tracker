import Task from "./Task";
const Tasks = ({ tasks,deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task deleteTask={deleteTask} key={task.id} task={task}></Task>
      ))}
    </div>
  );
};

export default Tasks;
