import { useEffect, useState } from "react";

const useFilteredTasksByStatus = (response) => {
  const [filteredTasksByStatus, setFilteredTasksByStatus] = useState({});
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filterTasksByStatus = (response, filter) => {
    const filteredTasks = response?.data?.reduce((acc, task) => {
      if (!filter || task.title.toLowerCase().includes(filter.toLowerCase())) {
        if (!acc[task.status]) {
          acc[task.status] = [];
        }
        acc[task.status].push(task);
      }
      return acc;
    }, {});
    setFilteredTasksByStatus(filteredTasks);
  };

  useEffect(() => {
    filterTasksByStatus(response, filter);
  }, [response, filter]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const sortByDate = (title) => {
    const sortedTasks = [...filteredTasksByStatus[title]].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (sortOrder === 'desc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setFilteredTasksByStatus({
      ...filteredTasksByStatus,
      [title]: sortedTasks,
    });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  return { filteredTasksByStatus, handleFilterChange, sortByDate, toggleSortOrder };
};

export default useFilteredTasksByStatus;
