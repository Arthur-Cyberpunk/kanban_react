import React, { useState } from "react";
import Cards from '../Cards';
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
    <div className="containerColumn">
      <div className="column">
          <h2>{title}</h2>
      </div>
      <div className="cards">
      <ul>
        {tasks.map((task, index) => (
          <Cards key={index}>{task} </Cards >
        ))}
      </ul>
        
      </div>
      <div className="adicionaTask"> Add task</div>
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleTaskAdd}>Adicionar Tarefa</button>
    </div>
  );
};

export default Column;
