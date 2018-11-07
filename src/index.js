import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import configureStore from './store/index';
import Bus from './Bus/Bus';

const store = configureStore();

const App = () => {
  ReactDom.render(
    <Provider store={store}>
      <Bus />
    </Provider>,
    document.getElementById('root'),
  );
};
App();
