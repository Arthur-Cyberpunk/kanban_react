import { addDays, format } from "date-fns";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, fetchData } from "../../redux/cards/actions";
import ModalEditTask from "../ModalEditCard";
import "./styles.scss";

const Cards = ({ task }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const createdAtDate = format(new Date(task.createdAt), "dd MMMM yyyy");
  const concludedAtDate = task.concludedAt
  ? format(addDays(new Date(task.concludedAt), 1), "- dd MMMM yyyy")
  : "";

  const handleCardClick = () => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteData(task._id));
    dispatch(fetchData());
  };

  return (
    <>
      <div className="card" ref={ref}>
        <ul>
          <div className="boxEditAndDelete">
            <li className={`difficult ${task.difficult}`}>{task.difficult}</li>
            <button className="editButton" onClick={handleCardClick}>
              Edit
            </button>
            <button className="deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <li className="description">{task.title}</li>
          <li className="createdAt">
            {createdAtDate} {concludedAtDate}
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <ModalEditTask task={selectedTask} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Cards;
