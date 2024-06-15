const initialState = {
  fetching: false,
  fetched: false,
  user: {},
  error: false,
  errorMessage: ""
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "REGISTRATION_PENDING": {
      return {...state, fetching: true};
    }
    case "REGISTRATION_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, errorMessage: "", user: action.payload};
    }
    case "REGISTRATION_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, errorMessage: action.payload.message, user: {}};
    }
    default: {
      return state;
    }
  }
}

