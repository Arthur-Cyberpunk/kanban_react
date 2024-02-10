import { format } from "date-fns";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { patchData } from "../../redux/cards/actions";
import "./styles.scss";

const ModalEditCard = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const difficultRef = useRef(null);
  const statusRef = useRef(null);
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMMM yyyy");

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async (event) => {
    const id = props.task._id;
    if (statusRef.current.value === "Ready") {
      const taskData = {
        title: titleRef.current.value,
        difficult: difficultRef.current.value,
        status: statusRef.current.value,
        concludedAt: formattedDate
      };
      await dispatch(patchData(id, taskData));
    } else {
      const taskData = {
        title: titleRef.current.value,
        difficult: difficultRef.current.value,
        status: statusRef.current.value,
      };
      await dispatch(patchData(id, taskData));
    }
    event.preventDefault()
    closeModal();
  };

  return (
    <section className="containerModal">
      <div className="modal-content">
        <span>Editar Tarefa</span>
        <form className="createNewCard" onSubmit={handleSubmit}>
          <input
            className="descriptionNewCard"
            type="text"
            placeholder="Titutlo da Tarefa"
            ref={titleRef}
            defaultValue={props.task.title}
          />
          <select
            className="difficult"
            ref={difficultRef}
            defaultValue={props.task.difficult}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            className="difficult"
            ref={statusRef}
            defaultValue={props.task.status}
          >
            <option value="Todo">To do</option>
            <option value="Doing">Doing</option>
            <option value="Ready">Ready</option>
          </select>
          <div className="decision">
            <button className="create" type="submit">
             Editar
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

export default ModalEditCard;
