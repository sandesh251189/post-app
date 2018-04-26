import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import IndexPost from './components/index_post'
import PostNew from './components/post_new'
import ReduxPromise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
    <Switch>
        <Route path="/post/new" component={PostNew}/>
        <Route  path="/" component={IndexPost}/>
    </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
