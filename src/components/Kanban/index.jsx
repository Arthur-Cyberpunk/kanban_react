import React, { useState } from "react";
import useFetchData from "../../utils/useFetchData";
import Column from "../Column";
import "./styles.scss";

const Kanban = () => {
  const [showModal, setShowModal] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [readyTasks, setReadyTasks] = useState([]);

  const addTaskToTodo = (task) => setTodoTasks([...todoTasks, task]);
  const addTaskToDoing = (task) => setDoingTasks([...doingTasks, task]);
  const addTaskToReady = (task) => setReadyTasks([...readyTasks, task]);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  useFetchData()

  return (
    <div className="container">
      <div className="kanbanColumns">
        <Column title="To Do" tasks={todoTasks} onTaskAdd={addTaskToTodo} />
        <Column title="Doing" tasks={doingTasks} onTaskAdd={addTaskToDoing} />
        <Column title="Ready" tasks={readyTasks} onTaskAdd={addTaskToReady} />
      </div>
      <button onClick={toggleModal}>Criar Nova Tarefa</button>
      
    </div>
  );
}

export default Kanban;
