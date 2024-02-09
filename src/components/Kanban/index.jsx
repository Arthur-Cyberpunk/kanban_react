import React from "react";
import useFetchData from "../../utils/useFetchData";
import Column from "../Column";
import "./styles.scss";

const Kanban = () => {
  const columnsOrder = ["Todo", "Doing", "Ready"];

  useFetchData();

  return (
    <div className="container">
      <div className="kanbanColumns">
        {columnsOrder.map((title) => (
          <div className="column" key={title}>
            <Column title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
