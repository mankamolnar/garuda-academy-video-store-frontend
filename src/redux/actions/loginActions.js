import axios from "axios";

export function fetchToken(username, password) {
  return function(dispatch) {
    axios.post(
        "http://localhost:8080/authentication/authenticate", 
        { username: username, password: password })
      .then((response) => {
        dispatch({type: "LOGIN_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "LOGIN_REJECTED", payload: err});
      });
  }
}

export function setUserName(name) {
  return {
    type: "SET_USER_NAME",
    payload: name
  };
}

export function setUserAge(age) {
  return {
    type: "SET_USER_AGE",
    payload: age
  };
}
