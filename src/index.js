
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoList from './reducers';
import HelloReact from './components/HelloReact';

import './styles/main.scss';

const reducer = combineReducers({ todoList });

const middlewares = [thunkMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <HelloReact text="World" />
      <HelloReact text="Bai" />
      <HelloReact />
    </div>
  </Provider>,
  document.getElementById('root'),
);
