


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
        ],
        totalMoney:0,
        currentItem:null
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

        },
        getTotalMoney:function(){

            let total = 0;

            if(data.items.length > 0){

                data.items.forEach(function(item){
                    
                    total += item.money;

                    data.totalMoneytotalMoney = total
                })

            } else{
                return data.totalMoney = 0;
            }

            return total;

        },
        getItemByID:function(id){

            let found = null;

            // Loop throught the items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })

            return found;

        },
        setCurrentItem:function(item){
            data.currentItem = item
        },
        getCurrentItem:function(){
            return data.currentItem;
        }
    }

})();


// UI CONTROLLER

const UICtrl = (function(){
    

    return {
        populateItemList:function(items){
            
            let html = "";

            items.forEach(function(item){
                
                html += `<li class="collection-item" id=item-${item.id}>
                            <strong>${item.name}</strong> :
                            <em>${item.money} Rs</em>
                            <a href="#" class="secondary-content">
                                <i class="fa-solid fa-pencil edit-item"></i>
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
        },
        addListItem:function(newItem){

            console.log(newItem);

            // Create a li element
            const li = document.createElement("li");

            // Add class to li
            li.className = "collection-item";

            // Add ID to li
            li.id = `item-${newItem.id};`;

            // Insert html
            li.innerHTML = `
                <strong>${newItem.name}</strong> :
                <em>${newItem.money} Rs</em>
                <a href="#" class="secondary-content">
                <i class="fa-solid fa-pencil edit-item"></i>
                </a>
            `;

            // Insert the li into ul
            document.querySelector("#item-list").appendChild(li);
        },
        showTotalMoney:function(total){
           document.querySelector(".total").innerText = total;
        },
        clearInputState:function(){
            document.querySelector("#name").value = "";
            document.querySelector("#money").value = "";
        },
        clearEditState:function(){
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState:function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        addItemToForm:function(){
            document.querySelector("#name").value = itemCtrl.getCurrentItem().name;
            document.querySelector("#money").value = itemCtrl.getCurrentItem().money;
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

        // Edit icon click
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

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

            // Add item to UI
            UICtrl.addListItem(newItem);

            // Get a total money
            const totalMoney = itemCtrl.getTotalMoney();

            // Show total money
            UICtrl.showTotalMoney(totalMoney);

            // Clear UI input value
            UICtrl.clearInputState();
            


        }


    }

    const itemEditClick =function(e){
      if(e.target.classList.contains("edit-item")){

        const listID = e.target.parentElement.parentElement.id;

        // Break into array
        const listArr = listID.split("-");

        // Get the actual ID
        const id = parseInt(listArr[1]);

        // Get item from data
        const itemToEdit = itemCtrl.getItemByID(id);

        // Set Current Item
        itemCtrl.setCurrentItem(itemToEdit);

        // Add item to form
        UICtrl.addItemToForm();

        
        UICtrl.showEditState();
        
      }
    }
    

    return {
      start:function(){
        console.log("App started");


        // Clear all three btn
        UICtrl.clearEditState();

        const items = itemCtrl.getItem();

        if(items.length > 0){
            
            UICtrl.populateItemList(items);

            // Get a total money
            const totalMoney = itemCtrl.getTotalMoney();

            // Show total money
            UICtrl.showTotalMoney(totalMoney);

            loadEventListeners();
        }else{
            console.log("NO Items");
        }
      }
    }


})();

App.start();





