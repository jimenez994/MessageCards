import { CARD_LOADING, GET_CARDS, GET_CARD,ADD_CARD } from '../actions/types';
const initialSate = {
  cards: [],
  post: {},
  loading: false
};

export default function(state = initialSate, action) {
  switch (action.key) {
    case CARD_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_CARDS: 
    console.log(action.payload)
      return {
        ...state,
        cards: action.payload,
        loading: true
      }
    case ADD_CARD:
    return {
      ...state,
      cards: [action.payload, ...state.cards]
    }
    case GET_CARD:
      return {
        ...state,
        card: action.payload,
        loading: false
      }
    default:
      return state;
  }
}