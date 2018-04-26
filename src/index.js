import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import IndexPost from './components/index_post'
import ReduxPromise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
        <Route path="/indexpost" component={IndexPost}/>

    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
