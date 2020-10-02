function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt", true);
  xhttp.onload = function(){
	  if(this.status == 200){
		  const div = document.createElement('div');
		  div.innerHTML = `
		  <h2>`+this.responseText+`</h2>
		  `;
		  document.getElementById("contentt").appendChild(div);
	  }
  }
  xhttp.send();
}

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
