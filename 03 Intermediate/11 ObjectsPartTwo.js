var user = {
    firstName : 'Azam',
    lastName : 'Shaikh',
    role : 'Admin',
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return this.courseList.length;
        //return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`
    },
    info : function(){
        var data = {
            'name' : this.firstName,
            'lastName' : this.lastName,
            'courseCount' : this.getCourseCount(),
            'login' : this.facebookSignedIn,
            'courseList' : this.courseList,
        };

        return data;
    }  
};

console.log(user.getCourseCount());
user.buyCourse("React Js Course");
user.buyCourse("Angular Js Course");
console.log(user.getCourseCount());

console.table(user.info());