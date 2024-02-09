import { format } from "date-fns";
import React, { useState } from "react";
import ModalEditTask from "../ModalEditCard";
import "./styles.scss";

const Cards = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const createdAtDate = format(new Date(task.createdAt), "dd MMMM yyyy");
  const concludedAtDate = task.concludedAt
    ? format(new Date(task.concludedAt), "- dd MMMM yyyy")
    : "";

  const handleCardClick = () => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <ul onClick={handleCardClick}>
          <div className="boxDifficultAndDelete">
            <li className={`difficult ${task.difficult}`}>{task.difficult}</li>
            <button className="deleteButton">Delete</button>
          </div>
          <li className="description">{task.description}</li>
          <li className="createdAt">
            {createdAtDate} {concludedAtDate}
          </li>
        </ul>
        {isModalOpen && (
          <ModalEditTask task={selectedTask} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default Cards;
