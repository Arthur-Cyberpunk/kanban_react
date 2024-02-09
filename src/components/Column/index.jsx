import React, { useState } from "react";
import { useDrag } from 'react-dnd';
import { useSelector } from "react-redux";
import useTasksByStatus from '../../utils/useCreateColumns';
import Cards from "../Cards";
import NewTaskModal from "../NewTaskModal";
import "./styles.scss";

const Column = ({ title }) => {
  const [showModal, setShowModal] = useState(false);
  const response = useSelector((rootReducer) => rootReducer.cardsReducer);
  const tasksByStatus = useTasksByStatus(response);

  const handleTaskAdd = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="containerColumn">
      <div className="column">
        <h2>{title}</h2>
      </div>
      <div className="cards" ref={dragRef}>
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
