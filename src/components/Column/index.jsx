import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";
import NewTaskModal from "../NewTaskModal";
import "./styles.scss";

const Column = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  const response = useSelector((rootReducer) => rootReducer.cardsReducer);

  const handleTaskAdd = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(response);

  const tasksByStatus =
    response && response.data
      ? response.data.reduce((acc, task) => {
        console.log(task)
          if (!acc[task.status]) {
            acc[task.status] = [];
          }
          acc[task.status].push(task);
          return acc;
        }, {})
      : {};

  console.log(tasksByStatus);

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
