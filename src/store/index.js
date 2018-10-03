import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import eventsReducer from './modules/events';
import busReducer from './modules/bus';

export default function configureStore() {
  return createStore(
    reducer,
    { loading: false, data: [], error: false },
    applyMiddleware(thunk),
  );
}

const reducer = (state = {bus: {}, events: {}}, action = {}) => {
  return { 
    bus: busReducer(state.bus),
    events: eventReducer(state.events)
  }
}
