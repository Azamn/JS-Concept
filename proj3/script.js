const courses = [
    {
        name : "Complete React JS Course",
        price : "2.4"
    },
    {
        name : "Complete Angular JS Course",
        price : "2.1"
    },
    {
        name : "Complete MERN Course",
        price : "2.7"
    },
    {
        name : "Complete C++ Course",
        price : "2.3"
    },
    {
        name : "Complete Django Course",
        price : "4.3"
    }
];

// <li class="list-group-item">
//     Complete C++ Course
//     <span class="float-right"> $ 2.8</span>
// </li>

function generateLIST(){
   
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
    
        const li = document.createElement("li"); // this create list element <li><li>
        li.classList.add("list-group-item"); // in <li> element add class <li class="list-group-item"> <li>

        const name = document.createTextNode(course.name); // this add text in <li> element </li>
        li.appendChild(name);

        // span created
        const span = document.createElement("span"); // here again create span 
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price); // here again text added in span element
        span.appendChild(price);

        // add span element  in li element
        li.appendChild(span);
        ul.appendChild(li);

    });
}

//generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");
button.addEventListener("click",() => {
    courses.sort( (a,b) => a.price - b.price);
    generateLIST();
});

const sortButton = document.querySelector(".sort-high-btn");
sortButton.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateLIST();
});
