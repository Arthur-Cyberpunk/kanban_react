import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { useSelector } from "react-redux";
import useFilteredTasksByStatus from "../../utils/useFilteredTasksByStatus";
import Cards from "../Cards";
import NewTaskModal from "../NewTaskModal";
import "./styles.scss";

const Column = ({ title }) => {
  const response = useSelector((rootReducer) => rootReducer.cardsReducer);
  const [showModal, setShowModal] = useState(false);
  const {
    filteredTasksByStatus,
    handleFilterChange,
    sortByDate,
    toggleSortOrder,
  } = useFilteredTasksByStatus(response);

  const handleTaskAdd = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSortByDate = () => {
    sortByDate(title);
    toggleSortOrder();
  };

  return (
    <div className="containerColumn">
      <div className="column">
        <h2>{title}</h2>

        <button className="newTask" type="button" onClick={handleTaskAdd}>
          <BiAddToQueue size={24} color="#FFF" />
        </button>
      </div>
      <div className="columnFilters">
        <input
          type="text"
          onChange={(e) => handleFilterChange(e.target.value)}
          placeholder="Filtrar por título..."
          className="filterTitle"
        />

        <div className="boxOrdering">
          <p>Order by date</p>
          <button className="ordering" type="button" onClick={handleSortByDate}>
            <CiFilter size={36} color="#000" />
          </button>
        </div>
      </div>
      <ul className="cards">
        {filteredTasksByStatus[title]?.map((task, index) => (
          <Cards
            key={index}
            className="task"
            task={task}
            index={index}
          />
        ))}
      </ul>
      {showModal && <NewTaskModal onClose={toggleModal} />}
    </div>
  );
};

export default Column;
