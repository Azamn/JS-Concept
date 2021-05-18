var user = {
    firstName : 'Azam',
    lastName : 'Shaikh',
    role : 'Admin',
    loginCount : 32,
    facebookSignedIn : true
};
 
console.log(user.firstName); // . (dot) feature is used to accessing the object

console.log(user['lastName']); // this is the second way to acces the value

user.loginCount = 44;

console.log(user.loginCount);

console.log(user);
console.table(user); // .table print the value of object ib key value pair

// Assignment

var mobilePhone = {
    'name' : 'iPhone 12',
    'price' : '₹'+ 76900.00,
    'capacity' : 128 + ' ' +'GB',
    'display' : 6.1 + ' ' + 'inch',
    'releaseDate' : '23rd October 2020',
    'weight (g)'   : 164.00,
};

console.table(mobilePhone);