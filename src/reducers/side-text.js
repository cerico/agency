function sideText (state = "The Developers", action){
  console.log(action)
	if (action.type === 'SHOW_SIDETEXT'){
		return action.text
		
	}else{
		return state;
	}
}

export default sideText ;