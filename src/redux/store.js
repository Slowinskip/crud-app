import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoriesRedux from './categoriesRedux';

const subreducers = {
    posts: postsReducer,
    categories: categoriesRedux,

}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;