import { combineReducers } from 'redux';
import events from './events';
import bus from './bus';
import animation from './animation';

const reducer = combineReducers({
  events,
  bus,
  animation,
});

export default reducer;
