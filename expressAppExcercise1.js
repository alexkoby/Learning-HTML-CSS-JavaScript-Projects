var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	var noise;
	if(animal === "pig"){
		noise = "'Oink'";
	}
	else if(animal === "cow"){
		noise = "'MOO'"
	}
	else if (animal === "dog"){
		noise = "'Woof Woof!'";
	}
	if(noise !== ""){
		res.send("The " + animal + " says " + noise);
	}

	
});

app.get("/repeat/:text/:number", function(req, res){
	if(req.params.number > 0){
		var text = "";
		for(var i = 0; i < req.params.number; i++){
			text += (" " + req.params.text);
		}
	}
	res.send(text);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life");
});

app.listen(1337, process.env.IP, function(){
	console.log("Server is up and running!");
})