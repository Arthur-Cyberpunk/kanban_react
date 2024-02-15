import { format } from "date-fns";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/cards/actions";
import "./styles.scss";

const NewTaskModal = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const difficultRef = useRef(null);
  const statusRef = useRef(null);
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMMM yyyy");

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async () => {
    if (statusRef.current.value === "Ready") {
      const taskData = {
        title: titleRef.current.value,
        difficult: difficultRef.current.value,
        status: statusRef.current.value,
        concludedAt: formattedDate
      };
      await dispatch(postData(taskData));
    } else {
      const taskData = {
        title: titleRef.current.value,
        difficult: difficultRef.current.value,
        status: statusRef.current.value,
      };
      await dispatch(postData(taskData));
    }
    closeModal();
  };

  return (
<section className="containerModal">
  <div className="modal-content">
    <span>Criar Nova Tarefa</span>
    <form className="createNewCard" onSubmit={handleSubmit}>
      <input
        className="descriptionNewCard"
        type="text"
        placeholder="Titutlo da Tarefa"
        ref={titleRef}
      />
      <select className="difficult" ref={difficultRef}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <select className="difficult" ref={statusRef}>
        <option value="Todo">To do</option>
        <option value="Doing">Doing</option>
        <option value="Ready">Ready</option>
      </select>
      <div className="decision">
        <button className="create" type="submit">
          Criar
        </button>
        <button className="cancel" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </form>
  </div>
</section>
  );
};

export default NewTaskModal;
