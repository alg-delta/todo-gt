import React from "react";
import CreateTask from "./CreateTask";
import { useState } from "react";
import TaskList from "./TaskList";
import { useEffect } from "react";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("Lalala")) ?? [];
  });
  const addTask = (task) => {
    //console.log("drist");
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComplete: false,
    };
    setList([...list, newTask]);
  };
  console.log(list);

  const deleteTask = (id) => {
    console.log("delete", id);
    const newlist = list.filter((task) => task.id !== id);
    setList(newlist);
  };
  const completeTask = (id) => {
    //console.log("complete", id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList(newList);
  };
  useEffect(() => {
    localStorage.setItem("Lalala", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h3 className="title">spisok</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
