import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

import {combineReducers, legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import informationReducer from './redux/query';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Main></Main>
  // </React.StrictMode>
  <Provider store={createStore(
      combineReducers( {informationReducer})
    )}>
    <Main></Main>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  // "proxy": "https://openapi.naver.com"
