import "./App.css";
import Colors from "./components/Colors";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";
import Footer from  "./components/Footer";
import About from "./components/About";
function App() {
  const title = "React Tracker";
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const task = await fetchTasks();
      setTasks(task);
    };
    getTasks();
  }, []);

  // get all data from sever
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = async (id) => {
    const tasktoToggle = await fetchTask(id);
    const updTask = {...tasktoToggle,reminder: !tasktoToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })
    const data = await res.json();

    setTasks((task) =>
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([data, ...tasks]);
    /*  const id = () => Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]); */
  };

  return (
    <Router>
    <div className="container">
      
      <Header
        title={title}
        showAdd={showAdd}
        onAdd={() => setShowAdd(!showAdd)}
      ></Header>
     
      <Route path="/" exact render = {(props) =>
      (
          <>
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
          </>
      )
      }
      />
       <Route path="/about" component={About}></Route> 
      <Footer/>
     
      
    </div>
    </Router>
  );
}

export default App;
