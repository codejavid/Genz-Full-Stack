

export function render(thoughts, onDelete){

  console.log(onDelete);

    const container = document.querySelector("#thoughtList");
    container.innerHTML = "";
    
    console.log(thoughts);

    thoughts.forEach((thought) => {

        const card = document.createElement("div");

        card.className =
        "bg-slate-800 p-3 rounded flex justify-between items-center";

        card.innerHTML = `
        <div>
          <p class="font-semibold">${thought.content}</p>
          <span class="text-xs text-slate-400">${thought.type} • ${thought.createAt}</span>
        </div>
        <button class="text-red-400">✖</button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        onDelete(thought.id);
      })
  
      container.appendChild(card);
    })
    

}