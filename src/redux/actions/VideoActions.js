import axios from "axios";

export function fetchVideos(category) {
  return function(dispatch) {
    axios.get(
        "https://garuda-academy-spring-api.onrender.com/videos/get-by-category/" + category)
      .then((response) => {
        dispatch({type: "VIDEOS_BY_CATEGORY_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "VIDEOS_BY_CATEGORY_REJECTED", payload: err});
      });
  }
}

export function fetchVideo(id) {
  return function(dispatch) {
    axios.get(
        "https://garuda-academy-spring-api.onrender.com/videos/get/" + id)
      .then((response) => {
        dispatch({type: "VIDEOS_BY_ID_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "VIDEOS_BY_ID_REJECTED", payload: err});
      });
  }
}
