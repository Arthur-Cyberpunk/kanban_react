export const moveCard = (fromList, toList, from, to) => ({
  type: "MOVE_CARD",
  payload: { fromList, toList, from, to },
});
