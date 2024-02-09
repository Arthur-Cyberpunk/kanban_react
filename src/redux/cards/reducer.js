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
        data: [...state.data, action.payload], // Adiciona a nova tarefa aos dados existentes
      };

    case "PATCH_CARDS":
      // Atualiza a tarefa existente com os novos dados
      const updatedData = state.data.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload.data, // Atualiza os dados da tarefa
          };
        }
        return task;
      });

      return {
        ...state,
        data: updatedData,
      };

    default:
      return state;
  }
};

export default reducer;
