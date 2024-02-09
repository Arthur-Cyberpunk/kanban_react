import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Cards from '../Cards';
import NewTaskModal from '../NewTaskModal';
import "./styles.scss";

const Column = ({ title, tasks, onTaskAdd }) => {
  const [newTask, setNewTask] = useState("");
  const [arrayTask, setArrayTask] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const data = useSelector(rootReducer => rootReducer.cardsReducer);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskAdd = () => {
    setShowModal(!showModal);
    if (newTask.trim() !== "") {
      onTaskAdd(newTask);
      setArrayTask(prevValues => [...prevValues, newTask]);
      setNewTask("");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  console.log(data)

  return (
    <div className="containerColumn">
      <div className="column">
          <h2>{title}</h2>
      </div>
      <div className="cards">
      <ul>
        {data?.map((tasks, index) => (
          <Cards key={index} arrayTask={arrayTask}>{tasks} </Cards >
        ))}
      </ul>
        
      </div>
      <div onClick={handleTaskAdd} className="adicionaTask"> Add task</div>
      {showModal && <NewTaskModal onClose={toggleModal} />}
    </div>
  );
};

export default Column;
