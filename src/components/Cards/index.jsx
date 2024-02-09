import { format } from 'date-fns';
import React from "react";
import "./styles.scss";


const Cards = ({ task }) => {
  console.log(task);

  const formattedDate = format(new Date(task.createdAt), 'dd MMMM yyyy');

  return (
    <>
      <div className="card">
        <ul>
          <li className={`difficult ${task.difficult}`}>{task.difficult}</li>
          <li className="description">{task.description}</li>
          <li className="createdAt">{formattedDate}</li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
