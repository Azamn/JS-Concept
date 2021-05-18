var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Maharashtra", "Rajasthan", "Delhi", "Assam");

console.log(states[0]);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

var user = ["Azam","azamali.shaikh@gmail.com",3,25,true];
//console.log(user);
user.pop();
user.pop();
//console.log(user);

user.unshift("New Value"); // add value in array in front and shif other value
//console.log(user);

user.shift();
//console.log(user);

console.log(user.indexOf("new"));
console.log(user);

console.log(Array.from("Azam"));