import "./App.css";
import Colors from "./components/Colors";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const title = "React-Tracker";
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((task) =>
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = () => Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="container">
      <Header title={title} showAdd={showAdd} onAdd={() => setShowAdd(!showAdd)}></Header>
      {showAdd && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        ></Tasks>
      ) : (
        "No task to Show"
      )}
    </div>
  );
}

export default App;
