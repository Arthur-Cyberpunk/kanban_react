const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARDS":
      return action.payload;

    case "POST_CARDS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
