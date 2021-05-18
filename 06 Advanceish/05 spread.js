// ...args // spread operator

// var returnValue = Math.max(2,5,7,9,4,2,8);

// console.log(returnValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3},{x:9,y:8,z:7});

// console.log(myObj);

function sumOne(a,b) {
    return a+b;
}

var myA = [5,3,1];

console.log(sumOne(...myA));  // spread operator : It takes a group an try to spread it the value 


function sumTwo(a,b, ...args){ // this args can be an aray
    // seprate them and sent individual value
    let multi = a*b;
    let sum = 0;

    for(const arg of args){
        sum = sum + arg;
    }

    return [multi, sum];
}

console.log(sumTwo(4,8,8,5));

