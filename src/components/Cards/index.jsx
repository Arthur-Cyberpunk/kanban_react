import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { deleteData, fetchData } from '../../redux/cards/actions';
import { moveCard } from '../../redux/dragDrop/actions';
import ModalEditTask from "../ModalEditCard";
import "./styles.scss";

const Cards = ({ task, index, listIndex }) => {
  const ref = useRef();
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
    item: { index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      console.log(draggedOffset, draggedTop)

      dispatch(moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex));

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref))

  return (
    <>
      <div className="card" ref={ref}>
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
      </div>
      {isModalOpen && (
          <ModalEditTask task={selectedTask} onClose={handleCloseModal} />
        )}
    </>
  );
};

export default Cards;
