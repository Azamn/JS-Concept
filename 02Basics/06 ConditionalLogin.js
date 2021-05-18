// Allow user to access course if he is :
// logged in from email
// logged in from Google
//logged in from Facebook

var isLoggedFromEmail = true;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = false;

if(isLoggedFromEmail || isLoggedInFromGoogle || isLoggedInFromFacebook){
    console.log("Allow User to access the course");
}else{
    console.log("You don't have access to see the course please login first");
}