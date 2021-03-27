import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import CounterReducer from './store/CounterReducer';


const rootReducer = combineReducers({
  CounterReducer,
});
const mystore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={mystore}>
      <App />
  </Provider>,
  document.getElementById('root')
);