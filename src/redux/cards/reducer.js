const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        data: action.payload,
      };

    case "POST_CARDS":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "PATCH_CARDS":
      const updatedData = state.data.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload.data,
          };
        }
        return task;
      });

      return {
        ...state,
        data: updatedData,
      };

    case "DELETE_CARDS":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
