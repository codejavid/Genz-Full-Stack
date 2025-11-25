


// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER  


// ITEM CONTROLLER

const itemCtrl = (function(){

    // Item COnstructor
    const Item = function(id, name, money){
        this.id = id,
        this.name = name,
        this.money = money;
    }

    // Data structure

    const data = {
        items:[
            {id:0, name:"Clothes", money:10000},
            {id:1, name:"Food", money:5000},
            {id:2, name:"Bike Service", money:3000},
        ]
    }


    return {
        getData:function(){
            return data;
        },
        getItem: function(){
            return data.items;
        },
        addItem(name, money){

           
           
            let ID; 

            // Create a ID

            if(data.items.length > 0){

                ID = data.items[data.items.length - 1].id + 1;

                
                money = parseInt(money);

                // Create a new item
                let newItem = new Item(ID, name, money);

                // Add to item array
                data.items.push(newItem);

                return newItem;
               
                
                


            }else{
                ID = 0;
            }

        }
    }

})();


// UI CONTROLLER

const UICtrl = (function(){

    return {
        populateItemList:function(items){
            
            let html = "";

            items.forEach(function(item){
                
                html += `<li class="collection-item" id=${item.id}>
                            <strong>${item.name}</strong> :
                            <em>${item.money} Rs</em>
                            <a href="#" class="secondary-content">
                                <i class="fa-solid fa-pencil"></i>
                            </a>
                        </li>`

            });

            // Insert into ul
            document.querySelector("#item-list").innerHTML = html;

        },
        getItemInput: function(){
            return {
                name:document.querySelector("#name").value,
                money:document.querySelector("#money").value
            }
        }
    }


})();



// APP CONTROLLER  


const App = (function(){


    // Events 

    const loadEventListeners = function(){

        console.log("All Events");

        // Add item event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

    }

    const itemAddSubmit = function(e){
        
        // Get the value from input
        const input = UICtrl.getItemInput();

        // Validation
        if(input.name === "" || input.money === ""){

            alert("Please fill the fields");

        }else{

            // Add item to array

            const newItem = itemCtrl.addItem(input.name, input.money);
            


        }


    }
    

    return {
      start:function(){
        console.log("App started");

        const items = itemCtrl.getItem();

        console.log(items.length);

        if(items.length > 0){
            
            UICtrl.populateItemList(items);

            loadEventListeners();
        }else{
            console.log("NO Items");
        }
      }
    }


})();

App.start();





