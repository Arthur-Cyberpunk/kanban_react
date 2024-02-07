import React, { useState } from "react";
import "./styles.scss";

const Column = ({ title, tasks, onTaskAdd }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskAdd = () => {
    if (newTask.trim() !== "") {
      onTaskAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="column">
      <div className="container">
        <h2>{title}</h2>
        {/* <input
          type="text"
          placeholder="Nova Tarefa"
          value={newTask}
          onChange={handleInputChange}
        /> */}
        <button onClick={handleTaskAdd}>Adicionar Tarefa</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Column;
