
const User = require("./06 classJs.js");

const azam = new User("azam","azamali.shaikh@gail.com");

console.log(azam.getInfo());
azam.enrollCourse("React Bootcamp");
azam.enrollCourse("Amgular Bootcamp");

console.log(azam.getCourseList());

let courses = azam.getCourseList();

courses.forEach((c) => console.log(c));