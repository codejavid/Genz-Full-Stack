

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Hello");
// })

let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", whenClick);

document.querySelector("#task-title").innerHTML = count;

function whenClick(){
   
    count += 1;

    document.querySelector("#task-title").innerHTML = count;


}
