const uno = () => {    // Arrow function
    console.log("i am one");
}

const dos = () => {    // Arrow function
    setTimeout( () => {
        console.log("wooohoooooo");
    }, 300);
    console.log("i am two");
}

const tres = () => {    // Arrow function
    console.log("i am three");
}

uno();
dos();
tres();

