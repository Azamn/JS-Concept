fetch('https://api.chucknorris.io/jokes/random')    // promise is like try catch
.then(response => {
    return response.json();
})
.then((data)=>{
    // console.log("DATA is", data);
    var joke = data.value;
    console.log("Joke : ",joke);
})
.catch();