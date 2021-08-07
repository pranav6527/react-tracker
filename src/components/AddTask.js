import React from "react";
import { useState } from "react";
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  
  const save = (e) => {
    e.preventDefault();

    if(!text)
    {
        alert("plese enter task")
        return
    }

    addTask({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
  };

  return (
    <form className="add-form" onSubmit={save}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time </label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Reminder </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
