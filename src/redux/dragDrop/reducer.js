const initialState = {
  lists: {
    fromList: { cards: [] }, // Estrutura básica das listas
    toList: { cards: [] },
    // Adicione mais listas conforme necessário
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_CARD":
      console.log("cheugie");
      const { fromList, toList, from, to } = action.payload;
      // Criar cópias dos arrays de cards para evitar mutação direta do estado
      const fromListCards = [...state.lists[fromList].cards];
      const toListCards = [...state.lists[toList].cards];
      // Remover o card da lista de origem
      const [draggedCard] = fromListCards.splice(from, 1);
      // Inserir o card na lista de destino na posição especificada
      toListCards.splice(to, 0, draggedCard);
      // Retornar um novo estado com as listas atualizadas
      return {
        ...state,
        lists: {
          ...state.lists,
          [fromList]: { cards: fromListCards },
          [toList]: { cards: toListCards },
        },
      };
    default:
      return state;
  }
};

export default reducer;
