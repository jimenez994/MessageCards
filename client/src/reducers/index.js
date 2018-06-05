import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import errorsReducer from './errorReducer';
export default combineReducers({
  card: cardReducer,
  errors: errorsReducer
})