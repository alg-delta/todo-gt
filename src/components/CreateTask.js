import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("завдання не пусте воно завжди є");
      return;
    }
    if (task.length > 30) {
      alert("завдання занадто довге ");
    }
    props.addTask(task);
    console.log(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setTask(event.target.value)}
        value={task}
        type="text"
        placeholder="задачі"
      />
      <button type="submit" className="btn">
        додати
      </button>
    </form>
  );
}
