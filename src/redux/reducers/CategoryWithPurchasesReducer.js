const initialState = {
  fetching: false,
  fetched: false,
  categories: [],
  error: false
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "CATEGORY_WITH_PURCHASES_PENDING": {
      return {...state, fetching: true};
    }
    case "CATEGORY_WITH_PURCHASES_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, categories: action.payload};
    }
    case "CATEGORY_WITH_PURCHASES_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, categories: []};
    }
    default: {
      return state;
    }
  }
}

