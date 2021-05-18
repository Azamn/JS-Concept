// function isEven(element){ // normal function
    var isEven = (element) => { // arrow functions is required always return
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

    // console.log(isEven(2));

// var result = [2,3,6,8].every(isEven); // callback function is checks all the value if all the value passed then gives true otherwise it gives false
// console.log(result);

var result = [2,4,6,8].every((e) => (e%2 === 0) ); // callback arrow function is checks all the value if all the value passed then gives true otherwise it gives false
console.log(result);