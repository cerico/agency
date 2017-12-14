import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
import thunk from 'redux-thunk';

import sideText from './reducers/side-text';
import people from './reducers/people';

const reducers = combineReducers({
  sideText,
  people
});
const middleware = [thunk];

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)