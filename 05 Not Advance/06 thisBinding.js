const azam = {
    firstName : "Azam",
    lastName : "Shaikh",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        First Name IS : ${this.firstName}
        Lats Name IS : ${this.lastName}
        His Role IS : ${this.role}
        and he is studying : ${this.courseCount} Courses
        `);
    },
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub Admin",
    courseCount : 4,

}

// azam.getInfo();

// var djInfo = azam.getInfo.bind(dj); // bind always gives you a reference back
// djInfo();

azam.getInfo.call(dj); // call method directly call