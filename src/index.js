import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import configureStore from './Store/index';

const store = configureStore();

const App = () => {
  ReactDom.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('root'),
  );
};
App();
