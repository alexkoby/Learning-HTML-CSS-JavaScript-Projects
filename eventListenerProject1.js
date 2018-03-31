var button = document.querySelector("button");
button.addEventListener("click", function(){
	var body = document.querySelector("body");
	if(body.style.backgroundColor == "purple"){
		body.style.backgroundColor = "white";
		button.textContent = "White";
	}
	else{
		body.style.backgroundColor = "purple";
		button.textContent = "Purple";
	}
});