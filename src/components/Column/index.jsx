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
        <Cards />
      </div>
      <div className="adicionaTask"></div>
    </div>
  );
};

export default Column;
