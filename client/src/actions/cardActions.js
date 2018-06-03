import axios from 'axios';
import { GET_ERRORS, ADD_CARD, CARD_LOADING,CLEAR_ERRORS } from "./types";

export const addCard = cardData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`http://localhost:8080/api/card/new`, cardData)
    .then(res => {
      if(res.data.success){
        dispatch({
          type: ADD_CARD,
          payload: res.data
        })
      }else{
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        })
      }
    })
    .catch(err => console.log(err));
}


export const setCardLoading = () => {
  return {
    type: CARD_LOADING
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}