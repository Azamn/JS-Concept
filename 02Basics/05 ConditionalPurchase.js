// user is only allowed to make a purchase when he is :
// logged in
// email verification
// cardInfo - Valid
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("logged in successfull.");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
}else{
    console.log("something error please check your details");
}