// var firstName = prompt("What is your firstName");
// var lastName = prompt("What is your lastName");
// var age = prompt("What is your age?");
// console.log("Your name is: "+ firstName + " " + lastName);
// console.log("Your age is: " + age);

var movies = [{name: "First Movie", rating: 100, hasSeen: false}, {name: "Second Movie", rating: 80, hasSeen: true}];
movies.push(
	{name: "Avengers",
	 rating: 5,
	 hasSeen: true}
	);
movies.push({
	name: "Batman",
	rating: 3,
	hasSeen: false
});

movies.forEach(function(first, index){
	console.log("The " + index + " movie is: " + first.name + ". It has a rating of: " + first.rating + " and have seen it: " + first.hasSeen);
});