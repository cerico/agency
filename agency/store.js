import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';

import events from './data/events.js';

const defaultState = {
	events
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
