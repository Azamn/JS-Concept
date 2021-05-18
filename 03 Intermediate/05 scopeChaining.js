var name = "Azam"

console.log("Line Number 3", name);

function sayName(){
    var name = "Mrs. N"
    console.log("Line Number 6", name);
    
    sayNameTwo();

    function sayNameTwo(){
        var name = "Mr.A";
        console.log("Line Number 11", name);
    }
}

// {
//     // Scope
// }




sayName();