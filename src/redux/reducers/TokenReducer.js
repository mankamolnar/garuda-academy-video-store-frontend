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
      return {...state, fetching: false, fetched: true, error: false, token: action.payload};
    }
    case "LOGIN_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, token: {}};
    }
    default: {
      return state;
    }
  }
}

