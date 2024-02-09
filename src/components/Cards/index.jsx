import { format } from "date-fns";
import React, { useState } from 'react';
import ModalEditTask from '../ModalEditCard';
import "./styles.scss";

const Cards = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const formattedDate = format(new Date(task.createdAt), "dd MMMM yyyy");

  const handleCardClick = () => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <ul>
          <li className={`difficult ${task.difficult}`}>{task.difficult}</li>
          <li className="description">{task.description}</li>
          <li className="createdAt">{formattedDate}</li>
        </ul>
        {isModalOpen && (
        <ModalEditTask task={selectedTask} onClose={handleCloseModal} />
      )}
      </div>
    </>
  );
};

export default Cards;
