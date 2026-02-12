import {Thought} from "./thought.js";
import {getThoughts, createThought, deleteThought} from "./api.js"
import {render} from "./ui.js";


const form = document.querySelector("#thoughtForm");
const input = document.querySelector("#thoughtInput");
const typeSelect = document.querySelector("#typeSelect");
const loader = document.querySelector("#loader");

let thoughts = []; // for api


// Loader control

function showLoader(){
    loader.classList.remove("hidden");
}

function hideLoader(){
    loader.classList.add("hidden");
}

// Load from API
async function loadThoughts() {
   try{

    showLoader();
    thoughts = await getThoughts();
    render(thoughts, handleDetele);

   }catch(err){

      console.log("Failed to fetch")

   }finally{

     hideLoader();

   }
}

// Add thoughts

async function handleAdd(content, type) {

    try{
        showLoader();
        const thought = new Thought(content, type);
    
        await createThought(thought);
    
        await loadThoughts();
    }catch(err){
        console.log("Failed to fetch")
    }finally{
        hideLoader();
    }
  
}

// Delete thought
async function handleDetele(id) {

    try{
        showLoader();
        await deleteThought(id);
        await loadThoughts();
    }catch(err){
        console.log("Failed to fetch")
    }finally{
        hideLoader();
    }
   
}

form.addEventListener("submit", async(e) => {

    e.preventDefault();

    if(!input.value.trim()){
        alert("PLease fill the form");
        return;
    }

    await handleAdd(input.value, typeSelect.value);

    input.value = "";

})

loadThoughts();

