import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";
import NewTaskModal from "../NewTaskModal";
import "./styles.scss";

const Column = ({ title, tasks, onTaskAdd }) => {
  const [newTask, setNewTask] = useState("");
  const [arrayTask, setArrayTask] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const response = useSelector((rootReducer) => rootReducer.cardsReducer);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskAdd = () => {
    setShowModal(!showModal);
    if (newTask.trim() !== "") {
      onTaskAdd(newTask);
      setArrayTask((prevValues) => [...prevValues, newTask]);
      setNewTask("");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const tasksByStatus =
    response && Array.isArray(response)
      ? response.reduce((acc, task) => {
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task);
          return acc;
        }, {})
      : {};

  return (
    <div className="containerColumn">
      <div className="column">
        <h2>{title}</h2>
      </div>
      <div className="cards">
        {tasksByStatus[title]?.map((task, index) => (
          <Cards key={index} className="task" task={task}></Cards>
        ))}
      </div>
      <div onClick={handleTaskAdd} className="adicionaTask">
        Add task
      </div>
      {showModal && <NewTaskModal onClose={toggleModal} />}
    </div>
  );
};

export default Column;
