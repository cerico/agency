//action, store

function changeEvent(state = [], action){
	switch (action.type) {
		case 'open_event' :
            return state
         default:
            return state
		}
	}



function modal(state = [], action){
	if (typeof action.modal !== 'undefined'){
		console.log(160)
		console.log(action)
		console.log(17)
		return action.modal
	}
	return ""
}

export default modal;