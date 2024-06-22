const initialState = {
  fetching: false,
  fetched: false,
  token: {},
  error: false
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "TOKEN_VERIFICATION_PENDING": {
      return {...state, fetching: true};
    }
    case "TOKEN_VERIFICATION_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, token: {errorMessage: action.errorMessage}};
    }
    case "TOKEN_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, token: {errorMessage: action.errorMessage}};
    }
    default: {
      return state;
    }
  }
}

