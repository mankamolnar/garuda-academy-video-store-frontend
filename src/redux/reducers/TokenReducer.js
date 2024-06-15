import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  token: {},
  error: false
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {...state, fetching: true};
    }
    case "LOGIN_FULFILLED": {
      axios.defaults.headers.common['Authorization'] = "Bearer " + action.payload.jwt;
      return {...state, fetching: false, fetched: true, error: false, token: action.payload};
    }
    case "LOGIN_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, token: {errorMessage: action.errorMessage}};
    }
    case "LOGIN_TUNCATE_ON_ERROR": {
      if (state.error) {
        console.log("truncate");
        return {...initialState};
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

