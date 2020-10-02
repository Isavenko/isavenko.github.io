function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "script.php", true);
  xhttp.onload = function(){
	  if(this.status == 200){
		  document.getElementById("content").appendChild(this.responseText);
	  }
  }
  xhttp.send();
}

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
