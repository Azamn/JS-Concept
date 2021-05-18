
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    };

     #courseList = []; // # used for private variable

    getInfo(){
        return { name: this.name, email: this.email };
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

    login(){  // static is private so u can't inherit
        return "You are logged in";
    }
}

// inheritance

class subAdmin extends User{
    constructor(name, email){
        super(name,email)
    }
    getAdminInfo(){
        return "I am subAdmin";
    }
    login(){
        return "login for admin only";
    }
}





module.exports = User; 

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new subAdmin('tom', 'tom@jerry.com');
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());