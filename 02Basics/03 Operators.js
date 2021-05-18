var num1 = 7;
var num2 = 6;

console.log("The Addition of two number is : ", num1 + num2);

var answer = num1 > num2;

console.log(answer);

//D = (L - S)/L * 100  // Discount Price formula 

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = (listingPrice - sellingPrice)/listingPrice * 100;
var displayDiscountPercentage =Math.round(discountPercent);
console.log("Discount percentage is :", displayDiscountPercentage, "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result); // typeof gives the what type of data is there store in this variable