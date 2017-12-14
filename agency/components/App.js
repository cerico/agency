import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators.js';

import Header from './Header.js';
import Content from './Content.js';
import First from './First.js';




function mapStateToProps(state){
	console.log(state)
	return {
		posts: state.posts,
		comments: state.comments,
		events: state.events,
		event: state.event,
		underline: state.underline,
		skills:state.skills,
		talks:state.talks,
		notes:state.notes,
		about:state.about,
		contact:state.contact,
		sideText: state.sideText
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(First);

export default App;