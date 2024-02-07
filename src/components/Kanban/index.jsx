import React, { useState } from "react";
import Column from "../Column";
import "./styles.scss";

const Kanban = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [readyTasks, setReadyTasks] = useState([]);

  const addTaskToTodo = (task) => setTodoTasks([...todoTasks, task]);
  const addTaskToDoing = (task) => setDoingTasks([...doingTasks, task]);
  const addTaskToReady = (task) => setReadyTasks([...readyTasks, task]);

  return (
    <div className="container">
      <div className="kanbanColumns">
        <Column title="To Do" tasks={todoTasks} onTaskAdd={addTaskToTodo} />
        <Column title="Doing" tasks={doingTasks} onTaskAdd={addTaskToDoing} />
        <Column title="Ready" tasks={readyTasks} onTaskAdd={addTaskToReady} />
      </div>
    </div>
  );
}

export default Kanban;
