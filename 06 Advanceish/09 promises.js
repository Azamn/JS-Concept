// promise has two state its fullfilled the requirement or not bt get the response

const uno = () => { // Arrow function
  return "i am one";
};

// const dos = () => {    // Arrow function
//     setTimeout( () => {
//        return "i am two";
//     }, 300);

// };

const dos = () => {  // Arrow function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am two");
    }, 300);
  });
};

const tres = () => { // Arrow function
  return "i am three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
