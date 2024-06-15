const initialState = {
  fetching: false,
  fetched: false,
  video: {},
  error: false
};


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "VIDEOS_BY_ID_PENDING": {
      return {...state, fetching: true};
    }
    case "VIDEOS_BY_ID_FULFILLED": {
      return {...state, fetching: false, fetched: true, error: false, video: action.payload};
    }
    case "VIDEOS_BY_CATEGORY_REJECTED": {
      return {...state, fetching: false, fetched: true, error: true, video: {}};
    }
    default: {
      return state;
    }
  }
}

