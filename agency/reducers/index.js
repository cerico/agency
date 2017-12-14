import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import sideText from './sidetext';
import modal from './modal';

const rootReducer = combineReducers({
	events,
	sideText,
	modal,
	routing :routerReducer
});

export default rootReducer;