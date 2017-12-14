export function showModal(modal) {
  console.log(modal)
	modal.openState = 'show-it'
	return {
		type: "OPEN_MODAL",
		modal,
	}
}

export function hideModal(){
  let modal = ""
  return {
  	type: "CLOSE_MODAL",
  	modal,
  }
}

export function changeSideText(text){
  return {
    type: "SHOW_SIDETEXT",
    text,
  }
}