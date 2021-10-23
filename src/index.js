import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import RootReducer from './Redux/Reducers/RootReducers'
import {applyMiddleware, createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
const MyStore = createStore(RootReducer,applyMiddleware(ReduxThunk))
ReactDOM.render(
    <Provider store={MyStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
