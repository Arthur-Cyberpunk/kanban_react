import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://kanbannodejs-production.up.railway.app/cardKanban/card",
    );
    console.log(response);
    dispatch({ type: "GET_CARDS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const postData = (data) => async (dispatch) => {
  try {
    await axios.post(
      "https://kanbannodejs-production.up.railway.app/cardKanban/card",
      data,
    );
    dispatch({ type: "POST_CARDS" });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const patchData = (id, data) => async (dispatch) => {
  try {
    await axios.patch(
      `https://kanbannodejs-production.up.railway.app/cardKanban/card/${id}`,
      data,
    );
    dispatch({ type: "PATCH_CARDS" });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://kanbannodejs-production.up.railway.app/cardKanban/card/${id}`,
    );
    dispatch({ type: "DELETE_CARDS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
