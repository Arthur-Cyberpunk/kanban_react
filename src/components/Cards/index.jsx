import React from "react";
import "./styles.scss";

const Cards = ({ arrayTask }) => {
  console.log(arrayTask);
  return (
    <>
      <div className="card">
        {/* <p>{arrayTask}</p> */}
        <ul>
          {arrayTask?.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cards;
