import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducers} from 'redux-form';
const rootReducer = combineReducers({
  posts: PostsReducer,
  form:formReducers
});

export default rootReducer;
