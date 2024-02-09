import { format } from "date-fns";
import React, { useState } from "react";
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { deleteData, fetchData } from '../../redux/cards/actions';
import ModalEditTask from "../ModalEditCard";
import "./styles.scss";

const Cards = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const dispatch = useDispatch();

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

  const handleDelete =  async  () => {
    await dispatch(deleteData(task._id))
    dispatch(fetchData());
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <div className="card" ref={dragRef}>
        <ul >
          <div className="boxEditAndDelete">
            <li className={`difficult ${task.difficult}`}>{task.difficult}</li>
            <button className="editButton" onClick={handleCardClick}>Edit</button>
            <button className="deleteButton" onClick={handleDelete}>Delete</button>
          </div>
          <li className="description">{task.title}</li>
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
