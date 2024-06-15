const initialState = {
  fetching: false,
  fetched: false,
  videos: [],
  error: false
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "VIDEOS_BY_CATEGORY_PENDING": {
      return {...state, fetching: true};
    }
    case "VIDEOS_BY_CATEGORY_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, videos: action.payload};
    }
    case "VIDEOS_BY_CATEGORY_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, videos: []};
    }
    default: {
      return state;
    }
  }
}

