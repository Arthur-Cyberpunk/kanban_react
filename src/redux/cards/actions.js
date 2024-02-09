import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/cardKanban/card");
    console.log(response);
    dispatch({ type: "GET_CARDS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const postData = (data) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3001/cardKanban/card", data);
    dispatch({ type: "POST_CARDS" });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const patchData = (id, data) => async (dispatch) => {
  try {
    await axios.patch(`sua_url_para_o_endpoint/${id}`, data);
    dispatch({ type: "PATCH_CARDS" });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
