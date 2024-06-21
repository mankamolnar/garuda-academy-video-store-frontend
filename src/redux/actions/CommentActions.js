import axios from "axios";

export function sendComment(videoId, comment, dispatch) {
  axios.post(
    "https://garuda-academy-spring-api.onrender.com/comments/create", 
    { comment: comment, videoId: videoId })
  .then((response) => {
    dispatch({type: "VIDEOS_BY_ID_FULFILLED", payload: response.data});
    
  }).catch((err) => {
    dispatch({type: "COMMENT_REJECTED", payload: err, errorMessage: "Valami hiba történt komment írás közben!"});
  });
  
}
