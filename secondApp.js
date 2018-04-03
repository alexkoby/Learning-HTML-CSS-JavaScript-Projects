var express = require("express");
var app = express();
//first two lines always, --> app is usual name

// "/" -> "Hi there!"
// "/bye" -> "GoodBye"
// "/dog" -> "MEOW"

app.get("/", function(request, response){
    response.send("Hey man");
});

app.get("/dogs", function(request, response){
	response.send("I love dogs!");
})

app.get("/bye", function(req, res){
	res.send("Thanks for looking at my first server!");
})


app.listen(1337, process.env.IP, function(){
    console.log("Server 1337 has started");
});