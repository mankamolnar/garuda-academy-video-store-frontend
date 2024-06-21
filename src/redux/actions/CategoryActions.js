import axios from "axios";

export function getCategories() {
  return function(dispatch) {
    axios.get("https://garuda-academy-spring-api.onrender.com/categories/get-all")
      .then((response) => {
        dispatch({type: "CATEGORY_ALL_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "CATEGORY_ALL_REJECTED", payload: err});
      });
  }
}

export function getCategoriesWithPurchases(token, userId) {
  
  
  //axios.defaults.headers.common['Access-Control-Allow-Origin'] = "http://localhost:3000"

  return function(dispatch) {
    axios.get("https://garuda-academy-spring-api.onrender.com/categories/get-with-purchases/" + userId)
      .then((response) => {
        dispatch({type: "CATEGORY_WITH_PURCHASES_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "CATEGORY_WITH_PURCHASES_REJECTED", payload: err});
      });
  }
}
