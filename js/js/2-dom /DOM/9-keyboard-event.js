

const taskInput = document.querySelector("#task");


// Key Down

// taskInput.addEventListener("keydown", runEvent);

// Key Up
// taskInput.addEventListener("keyup", runEvent); // ***

// Key Press
// taskInput.addEventListener("keypress", runEvent); 

// Input
// taskInput.addEventListener("input", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Copy
// taskInput.addEventListener("copy", runEvent);

// Paste
taskInput.addEventListener("paste", runEvent);

function runEvent(event){
    console.log(event.type);
    console.log(event.target.value);
}