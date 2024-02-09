import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, postData } from '../../redux/cards/actions';
import "./styles.scss";

const NewTaskModal = (props) => {
  const dispatch = useDispatch();
  const descriptionRef = useRef(null);
  const difficultRef = useRef(null);
  const statusRef = useRef(null);

  const closeModal = () => {
    props.onClose();
  };

  const handleSubmit = async () => {
    const taskData = {
      description: descriptionRef.current.value,
      difficult: difficultRef.current.value,
      status: statusRef.current.value,
    };
    await dispatch(postData(taskData));
    dispatch(fetchData());
    closeModal();
  };

  return (
    <section className="containerModal">
      <div className="modal-content">
        <span>Criar Nova Tarefa</span>
        <form className="createNewCard" onSubmit={handleSubmit}>
          <textarea
            className="descriptionNewCard"
            rows="4"
            cols="50"
            placeholder="Descricao da Tarefa"
            ref={descriptionRef}
          ></textarea>
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
          <button className="cancel" onClick={closeModal}>Cancelar</button>
        </div>
        </form>
      </div>
    </section>
  );
};

export default NewTaskModal;
