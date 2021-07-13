import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './Error';
import { Provider } from 'react-redux';
import uiReducer from "./redux/reducer/uiReducer";
import sidemenuReducer from "./redux/reducer/sidemenuReducer";
import { createStore, combineReducers, compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//middleWare
const logger = (store) => {
  return next => {
    return (action) => {
      console.log('middleware',action);
      next(action);
    }
  }
};

//combining REDUCERS
const rootReducer = combineReducers({
  ui:uiReducer,
  sidemenu:sidemenuReducer,
});

//CREATE STORE
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
