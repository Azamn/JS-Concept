/*
Define a function that can answer the role of a user.
A user can be following roles:
admin - with all access
subadmin - with access to create/delte courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input : getUserRole(name, role)

*/
var getUserRole = function(name, role){
// function getUserRole(name, role) {
    
  switch (role) {
    case "admin":
      return `Hello ${name}, is admin with all access`;
      //break; // This is not neccessary
    case "subadmin":
      return `Hello ${name}, is sub-admin with access to createa and delete courses`;
      //break;
    case "testprep":
      return `Hello ${name}, is testprep with access to createa and delete test`;
      //break;
    case "user":
      return `Hello ${name}, is a user to consume content`;
      //break;
    default:
        return `Hello ${name}, is a trial user`; 
      //break;
  }

  if (role === "admin") {
    return `Hello ${name}, you have all access`;
  } else if (role === "subadmin") {
    return `Hello ${name}, you have access to create/delete courses`;
  } else if (role === "testprep") {
    return `Hello ${name} , you have access to create/delete tests`;
  } else if (role === "user") {
    return `Hello ${name}, you have consume all courses`;
  } else {
    return `Hello ${name}, you are trial user`;
  }

}

var getRole = getUserRole("Azam", "other");

console.log(getRole);
