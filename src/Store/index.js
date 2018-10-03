import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/events';

export default function configureStore() {
  return createStore(
    reducer,
    { loading: false, data: [], error: false },
    applyMiddleware(thunk),
  );
}