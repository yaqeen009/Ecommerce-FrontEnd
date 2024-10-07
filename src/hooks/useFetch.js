import { useEffect, useReducer } from "react";

//initial state for reducer
const initialState = {
  data: null,
  loading: null,
  error: null,
};
//reducer function
const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

//custom hook for fetching data
const useFetchData = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: result });
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);
  return state;
};

export default useFetchData;
