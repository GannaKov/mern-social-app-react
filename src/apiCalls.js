import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

//
