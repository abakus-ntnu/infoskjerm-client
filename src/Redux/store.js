import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/widgets';

export default function configureStore() {
  return createStore(
    reducer,
    { input: ' ' },
    applyMiddleware(thunk),
  );
}
