function loadDoc() {
	var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "text.txt", true);
  xhttp.onload = function(){
	  if(this.status == 200){
		  //something
		  const div = document.createElement('div');
		  div.innerHTML = this.responseText;
		  document.getElementById("pagemain").appendChild(div);
	  }
  }
  xhttp.send();
}

function postDoc(){
	const div = document.createElement('div');
	//div.innerHTML = "<div class="entryfield"><h2>"+document.getElementById("title").value+"</h2><p>"+document.getElementById("data").value+"</p></div>";
	//document.getElementById("pagemain").appendChild(div);
}

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
