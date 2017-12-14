import React from 'react';

import { render } from 'react-dom';

import App from './components/App.js';
import Main from './components/First.js';
import Header from './components/Header.js';
import Content from './components/Content.js';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js'

const router = (
	<Provider store={store}>
	  <Router history={history}>
	    <Route path="/" component={Main}>
	      <IndexRoute component={Content}></IndexRoute>
	    </Route>
	  </Router>
	</Provider>
	)




render(router, document.getElementById('root'));