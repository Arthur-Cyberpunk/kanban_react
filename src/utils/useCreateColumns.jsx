import { useEffect, useState } from 'react';

const useTasksByStatus = (response) => {
  const [tasksByStatus, setTasksByStatus] = useState({});

  useEffect(() => {
    if (response && response.data) {
      const updatedTasksByStatus = response.data.reduce((acc, task) => {
        if (!acc[task.status]) {
          acc[task.status] = [];
        }
        acc[task.status].push(task);
        return acc;
      }, {});
      setTasksByStatus(updatedTasksByStatus);
    }
  }, [response]);

  return tasksByStatus;
};

export default useTasksByStatus;
