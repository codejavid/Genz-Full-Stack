const usersDiv = document.querySelector("#users");
const searchInput = document.querySelector("#search");
const statsDiv = document.querySelector("#stats");
const detailsDiv = document.querySelector("#details");

let allUsers = [];


async function loadUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    allUsers = await res.json();

    renderUsers(allUsers);
}

function showDetails(user){
  detailsDiv.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>City: ${user.address.city}</p>
    <p>Company: ${user.company.name}</p>
  `;
}

function renderUsers(users){

   usersDiv.innerHTML = "";
   
   users.forEach(user => {
    const div = document.createElement("div");

    div.innerText = user.name;

    div.addEventListener("click", () => {
        showDetails(user);
    })

    usersDiv.appendChild(div);
   });
}

searchInput.addEventListener("input", (e) => {

  
    const keyword = searchInput.value.toLowerCase();

    const filtered = allUsers.filter(user =>
        user.name.toLowerCase().includes(keyword)
    );

    renderUsers(filtered);
    renderStats(filtered);
    

})


function renderStats(users) {
    const cityCount = users.reduce((acc, user) => {
     
        acc[user.address.city] = (acc[user.address.city] || 0) + 1;
        return acc;

    }, {});

    statsDiv.innerHTML = `
        <p>Total Users: ${users.length}</p>
        <p>Cities: ${Object.keys(cityCount).length}</p>
    `;
    
}
  


loadUsers();



