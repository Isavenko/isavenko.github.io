function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt", true);
  xhttp.onload = function(){
	  if(this.status == 200){
		  //something
		  const div = document.createElement('div');
		  div.className = 'entryfield';
		  div.innerHTML = this.responseText;
		  document.getElementById("content").appendChild(div);
	  }
  }
  xhttp.send();
}

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
