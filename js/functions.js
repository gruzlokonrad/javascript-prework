function printMessage(msg){
  if (document.getElementById("message").textContent == 'Wybierz i zagraj!') {
    clearMessages()
  }

	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('message').appendChild(div);
}

function clearMessages(){
	document.getElementById('message').innerHTML = '';
}