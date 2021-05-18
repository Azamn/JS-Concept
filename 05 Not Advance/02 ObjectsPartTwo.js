var User = {
    name: "",
    getUserName: function (){
        console.log(`User Name Is : ${this.name}`);
    },
};

var azam = Object.create(User);
//console.log(azam);

azam.name = "Azam Shaikh";
azam.getUserName();

var Sam = Object.create(User,{
    name:{value:"Sammy"},
    courseCount : {value:3}
})

Sam.getUserName();
