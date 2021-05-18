// const user = ["Azam", 3, "Admin"];

// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);

// Destrucuting with object or with array also

const MyUser = {
    name : "Azam",
    courseCount : 5,
    role : "Admin",
};

console.log(MyUser.courseCount);

const {name, courseCount, role} = MyUser;

console.log(courseCount);