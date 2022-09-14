import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import 'semantic-ui-css/semantic.min.css'
import './index.css';

import App from './components/App';

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
// https://redux-toolkit.js.org/api/configureStore
// import {configureStore} from "@reduxjs/toolkit";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    //  <Provider store={configureStore()}>
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
