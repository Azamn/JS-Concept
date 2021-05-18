// show user a signout button if he is authenticated
//other wise show him option to Login/signup


var authenticated = true;

if(authenticated){
    console.log("Show Signout Button");
}else{
    console.log("Show login/signup");
}

authenticated ? console.log("Show signout button") : console.log("show login/signup button");