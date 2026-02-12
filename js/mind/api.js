
const API = 'https://698b3c046c6f9ebe57bc0c2d.mockapi.io/ap/v1/thoughts';


// Get all Thoughts
export async function getThoughts() {
    const res = await fetch(API);
    return res.json();
}

export async function createThought(thought) {
    
    const res = await fetch(API, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(thought)
    })

    return res.json();
    
}


export async function deleteThought(id) {
    await fetch(`${API}/${id}`, {
        method:"DELETE"
    })
};
