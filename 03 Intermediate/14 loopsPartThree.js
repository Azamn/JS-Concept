const name = ["Youtube","facebook","Instagram","Netflix","Amazon"]

for(const n of name){ // for of used in array
    console.log(n);
}

const symbols = {
    yt : 'Uoutube',
    ig : 'Instagram',
    fb : 'Facebook',
    lco : "LearnCodeLine",
}

for(const s in symbols){ // for n in used in objects
    console.log(`key is : ${s} and value is: ${symbols[s]}`);
}