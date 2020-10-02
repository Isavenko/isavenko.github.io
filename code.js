function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt", true);
  xhttp.onload = function(){
	  if(this.status == 200){
		  //console.log(this.responseText);
		  console.log(this.responseText);
		  document.getElementById("content").appendChild(this.responseText);
	  }
  }
  xhttp.send();
}

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
