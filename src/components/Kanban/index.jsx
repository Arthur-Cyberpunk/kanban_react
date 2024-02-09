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

  const columnsOrder = ['Todo', 'Doing', 'Ready'];


  return (
    <div className="container">
      <div className="kanbanColumns">
      {columnsOrder.map(title => (
        <div className="column" key={title}>
          <Column  title={title} />
        </div>
      ))}
      </div>
      <button onClick={toggleModal}>Criar Nova Tarefa</button>
      
    </div>
  );
}

export default Kanban;
