import { combineReducers } from 'redux';
import calciReducer from './calciReducer';

const rootReducer = combineReducers({
  calciReducer,
});

export default rootReducer;
