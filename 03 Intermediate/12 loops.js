// for (let i = 0; i < 10; i++) {
//     console.log(i);;

// }

const myStates = [
    "Bihar", 
    "Maharashtra", 
    "Assam",
    1947,
    "Tamil Nadu",
    "Rajasthan"
];

// for(let i =0; i < myStates.length; i++){

//     if(typeof myStates[i] !== 'string') break; // keep on continue if this condition  is true
//     console.log(myStates[i]);
// }

// let scope is just to use and free the memory


let i = 20;

// while(i < myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

do{
    console.log(i);
    i++;
}while(i<10);