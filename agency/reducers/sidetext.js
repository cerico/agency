function sideText (state = [], action){
	if (action.type === 'SHOW_SIDETEXT'){
		return action.text
		
	}else{
		return "The Developers";
	}
}

export default sideText ;