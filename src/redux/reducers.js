import {
    DATA_FETCH_FAILURE,
    DATA_FETCH_REQUEST,
    DATA_FETCH_SUCCESS,
    SORT_ASC,
    SORT_DESC,
    SEARCH_CONTACT,
    ADD_FAVORITE,
    DELETE_FAVORITE,
  } from "./types";
  
  const initialState = {
    loading: false,
    error: "",
    favorites: [],
    data: [],
  };
  
  const sortByAsc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];
  
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  };
  
  const sortByDesc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];
  
    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DATA_FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: "",
        };
      case DATA_FETCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: [],
        };
      case SORT_ASC:
        return {
          ...state,
          data: state.data.sort((a, b) => {
            return sortByAsc(a, b, "firstName");
          }),
        };
      case SORT_DESC:
        return {
          ...state,
          data: state.data.sort((a, b) => {
            return sortByDesc(a, b, "firstName");
          }),
        };
      case SEARCH_CONTACT:
        return {
          ...state,
          data: state.data.filter((item) => {
            const firstLastName = item.firstName + " " + item.lastName;
            return firstLastName
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };
      case ADD_FAVORITE:
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      case DELETE_FAVORITE:
        let element = state.favorites.filter(element => element.id == action.payload.id);
        let favorites = state.favorites;
        favorites.splice(state.favorites.indexOf(element[0]), 1)
        return {
          ...state,
          favorites: favorites
        }
      default:
        return state;
    }
  };
  
  export default reducer;