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
	div.className = "entryfield";
	var textvar = "<h2>"+document.getElementById("title").value+"</h2><p>"+document.getElementById("data").value+"</p>";
	div.innerHTML = textvar;
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "script.php", true); 
	xhttp.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
		 var response = this.responseText;
		console.log(response);
	   }
	};
    // "<div class="entryfield">"+textvar+"</div>"
	xhttp.send("lmar");
	document.getElementById("pagemain").appendChild(div);
	window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}

('#entry').click(function() {

    var textt = $("input#title").val();

    var shout = $.ajax({
          type: 'POST',
          url: "text.txt",
          data: textt,
          dataType: "text",

});
});

function countChars(countfrom,displayto) {
	var len = document.getElementById(countfrom).value.length;
	document.getElementById(displayto).innerHTML = len;
}
