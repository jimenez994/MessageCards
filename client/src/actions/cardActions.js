import axios from 'axios';
import { GET_ERRORS, ADD_CARD, CARD_LOADING,CLEAR_ERRORS, GET_CARDS } from "./types";

export const addCard = cardData => dispatch => {
  console.log(cardData)
  dispatch(clearErrors());
  axios
    .post("http://localhost:8080/api/card/newCard", cardData)
    .then(res => {
      if(res.data.success){
        dispatch({
          type: ADD_CARD,
          payload: res.data
        })
      }else{
        console.log(res.data)
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err));
}
export const getCards = () => dispatch => {
  dispatch(setCardLoading);
  axios
    .post("http://localhost:8080/api/card/all")
    .then(res => {
      if (res.data != null) {
        // console.log(res.data)
        dispatch( {
          type: GET_CARDS,
          payload: res.data
        })
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err));
}


export const setCardLoading = () => {
  console.log("loading...")
  return {
    type: CARD_LOADING
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}