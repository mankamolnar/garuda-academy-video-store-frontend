import axios from "axios";

export function fetchToken(username, password) {
  return function(dispatch) {
    axios.post(
        "http://localhost:8080/authentication/authenticate", 
        { username: username, password: password })
      .then((response) => {
        dispatch({type: "LOGIN_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "LOGIN_REJECTED", payload: err,  errorMessage: "Valami hiba történt! Kérlek próbáld újra!"});
      });
  }
}

export function verifyToken(token, dispatch) {
  axios.post(
    "http://localhost:8080/authentication/verify-token", 
    { token: token })
  .then((response) => {
    if (response.data.valid) {
      dispatch({type: "LOGIN_FULFILLED", payload: {jwt: token}});
    } else {
      dispatch({type: "TOKEN_VERIFICATION_REJECTED", errorMessage: "Lejárt a tokened! Kérlek jelentkezz be újra!"});
    }
    
  }).catch((err) => {
    dispatch({type: "TOKEN_REJECTED", payload: err, errorMessage: "Egyéb hiba! Kérlek próbálj meg később bejelentkezni!"});
  });
}

export function doRegistration(email, username, password) {
  return function(dispatch) {
    axios.post(
        "http://localhost:8080/users/create", 
        { email: email, username: username, password: password })
      .then((response) => {
        dispatch({type: "REGISTRATION_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "REGISTRATION_REJECTED", payload: err.response.data});
      });
  }
}
