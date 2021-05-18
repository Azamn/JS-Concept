// function init() {
//     var firstName = "Azam";
//     function sayFirstname() {
//       console.log(firstName);
//     }
  
//     return sayFirstname;
//   }
  
//   var value = init();
  
//   value();


function doAddition(x){
    return function(y){
        return x + y;
    }
}

var addFive = doAddition(5);
console.log(addFive(3));

console.log(doAddition(5)(5));

//doAddition()()() //curring