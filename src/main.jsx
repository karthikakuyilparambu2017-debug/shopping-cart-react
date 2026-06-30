// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
// import './App.css';
import App from './App.jsx';
import { store } from './store.jsx';
import { Provider} from "react-redux";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <BrowserRouter>
  <App />
  </BrowserRouter>
 </Provider>
)
