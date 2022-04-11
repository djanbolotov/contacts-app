import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_REQUEST,
  SORT_ASC,
  SEARCH_CONTACT,
  SORT_DESC,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "./types";

export const fetchRequestData = () => {
  return {
    type: DATA_FETCH_REQUEST,
  };
};

export const fetchSuccessData = (data) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchFailureData = (error) => {
  return {
    type: DATA_FETCH_FAILURE,
    payload: error,
  };
};

export const sortByAlphabeticalAsc = () => {
  return {
    type: SORT_ASC,
  };
};

export const sortByAlphabeticalDesc = () => {
  return {
    type: SORT_DESC,
  };
};

export const searchContact = (payload) => {
  return {
    type: SEARCH_CONTACT,
    payload,
  };
};

export const addFavorite = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload
  }
}

export const deleteFavorite = (payload) => {
  return {
    type: DELETE_FAVORITE,
    payload
  }
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchRequestData());
    fetch("https://my-json-server.typicode.com/RomanChasovitin/demo-api/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSuccessData(data.data));
      })
      .catch((error) => {
        dispatch(fetchFailureData(error.message));
      });
  };
};
