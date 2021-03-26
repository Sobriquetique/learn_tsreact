import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export interface SimpleAction<T> {
  type: string;
  payload: T | null;
}

function reducer(state: number | null = null, action: SimpleAction<number>): number | null {
  let newState = state ? state : 0;
  switch (action.type) {
    case "INCREMENT":
      return newState + 1;
    case "DECREMENT":
      return newState - 1;
    default:
      return newState;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);