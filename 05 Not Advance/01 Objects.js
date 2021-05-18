var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is : ${this.courseCount}`);
    };

};

User.prototype.getFirstName = function(){
    console.log(`Your Firstname is : ${this.firstName}`);
};

var azam = new User("Azam",4);
azam.getCourseCount();

if(azam.hasOwnProperty("firstName")){
    azam.getFirstName();
}



//console.log(azam);

var sam = new User("Sam",1);
sam.getCourseCount();
sam.getFirstName();
//console.log(sam);