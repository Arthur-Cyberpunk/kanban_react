import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useSelector } from "react-redux";
import useTasksByStatus from '../../utils/useCreateColumns';
import Cards from "../Cards";
import NewTaskModal from "../NewTaskModal";
import "./styles.scss";

const Column = ({ title, index: listIndex }) => {
  const [showModal, setShowModal] = useState(false);
  const response = useSelector((rootReducer) => rootReducer.cardsReducer);
  const tasksByStatus = useTasksByStatus(response);

  const handleTaskAdd = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="containerColumn">
      <div className="column">
        <h2>{title}</h2>
        <button type="button" onClick={handleTaskAdd}>
            <BiAddToQueue size={24} color="#FFF" />
          </button>
      </div>
      <ul className="cards" >
        {tasksByStatus[title]?.map((task, index, ) => (
          <Cards key={index} className="task" task={task} index={index} listIndex={listIndex}></Cards>
        ))}
      </ul>
      {showModal && <NewTaskModal onClose={toggleModal} />}
    </div>
  );
};

export default Column;
