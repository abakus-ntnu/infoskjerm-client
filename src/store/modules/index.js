import { combineReducers } from 'redux';
import events from './events';
import bus from './bus';

const reducer = combineReducers({
  events,
  bus,
});

export default reducer;