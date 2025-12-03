


// ITEM CONTROLLER, UI CONTROLLER, STORAGE CONTROLLER, APP CONTROLLER  


// ITEM CONTROLLER

const itemCtrl = (function () {

    // Item COnstructor
    const Item = function (id, name, money) {
        this.id = id,
            this.name = name,
            this.money = money;
    }

    // Data structure

    const data = {
        items: [
            { id: 0, name: "Clothes", money: 10000 },
            { id: 1, name: "Food", money: 5000 },
            { id: 2, name: "Bike Service", money: 3000 },
        ],
        totalMoney: 0,
        currentItem: null
    }


    return {
        getData: function () {
            return data;
        },
        getItem: function () {
            return data.items;
        },
        addItem(name, money) {



            let ID;

            // Create a ID

            if (data.items.length > 0) {

                ID = data.items[data.items.length - 1].id + 1;


                money = parseInt(money);

                // Create a new item
                let newItem = new Item(ID, name, money);

                // Add to item array
                data.items.push(newItem);

                return newItem;



            } else {
                ID = 0;
            }

        },
        getTotalMoney: function () {

            let total = 0;

            if (data.items.length > 0) {

                data.items.forEach(function (item) {

                    total += item.money;

                    data.totalMoney = total
                })

            } else {
                return data.totalMoney = 0;
            }

            return total;

        },
        getItemByID: function (id) {

            let found = null;

            // Loop throught the items
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
            })

            return found;

        },
        setCurrentItem: function (item) {
            data.currentItem = item
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        deleteItem: function (id) {
            // Get IDS

            const ids = data.items.map(function (item) {
                return item.id;
            });

            // Get the index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        updateItem:function(name, money){

            money = Number(money);

            let found = null;

            data.items.forEach(function(item){

                if(item.id === data.currentItem.id){
                    
                    item.name = name,
                    item.money = money,
                    found = item

                }

            })

            return found;

        },
        clearAllItems:function(){
            data.items = [];
        }
    }

})();


// UI CONTROLLER

const UICtrl = (function () {


    return {
        populateItemList: function (items) {

            let html = "";

            items.forEach(function (item) {

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
        getItemInput: function () {
            return {
                name: document.querySelector("#name").value,
                money: document.querySelector("#money").value
            }
        },
        addListItem: function (newItem) {

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
        showTotalMoney: function (total) {
            document.querySelector(".total").innerText = total;
        },
        clearInputState: function () {
            document.querySelector("#name").value = "";
            document.querySelector("#money").value = "";
        },
        clearEditState: function () {
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function () {
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        addItemToForm: function () {
            document.querySelector("#name").value = itemCtrl.getCurrentItem().name;
            document.querySelector("#money").value = itemCtrl.getCurrentItem().money;
        },
        deleteListItem: function (id) {

            const itemID = `#item-${id}`;

            const item = document.querySelector(`${itemID}`);

            item.remove();
        },
        updateListItem:function(item){
            
            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function(listItem){
                
                // const itemID = listItem.id;
                const itemID = listItem.getAttribute("id");

                if(itemID === `item-${item.id}`){

                   document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}</strong> :
                    <em>${item.money} Rs</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                   `

                }
            })

        },
        clearItems:function(){
            document.querySelector("#item-list").innerHTML = "";
        }
        
    }


})();



// APP CONTROLLER  

const App = (function () {


    // Events 

    const loadEventListeners = function () {

        console.log("All Events");

        // Add item event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

        // Delete icon click
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);

        // Edit icon click
        document.querySelector(".update-btn").addEventListener("click", itemEditSubmit);

        // Edit icon click
        document.querySelector(".clear-btn").addEventListener("click", itemClearSubmit);

        // Edit icon click
        document.querySelector(".back-btn").addEventListener("click", backClick);

    }

    const itemAddSubmit = function (e) {

        // Get the value from input
        const input = UICtrl.getItemInput();

        // Validation
        if (input.name === "" || input.money === "") {

            alert("Please fill the fields");

        } else {

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

    const itemEditClick = function (e) {
        if (e.target.classList.contains("edit-item")) {

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

    const itemDeleteSubmit = function (e) {

        // Get the current item
        const currentItem = itemCtrl.getCurrentItem();

        // Delete from the data structure
        itemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        // Get a total money
        const totalMoney = itemCtrl.getTotalMoney();

        // Show total money
        UICtrl.showTotalMoney(totalMoney);

        // Clear all three btn
        UICtrl.clearEditState();

        // Clear UI input value
        UICtrl.clearInputState();

    }

    const itemEditSubmit = function(e){

        // Get the input from UI
        const input = UICtrl.getItemInput();

        // Update item in the data structure
        const updateItem = itemCtrl.updateItem(input.name, input.money);

        // Update the UI
        UICtrl.updateListItem(updateItem);

        // Get a total money
        const totalMoney = itemCtrl.getTotalMoney();

        // Show total money
        UICtrl.showTotalMoney(totalMoney);

        // Clear all three btn
        UICtrl.clearEditState();

        // Clear UI input value
        UICtrl.clearInputState();


    }

    const backClick = function(){

        // Clear the edit value
        UICtrl.clearEditState();

        // Clear the input value
        UICtrl.clearInputState();
    }

    const itemClearSubmit = function(){

        // Clear all from the data structure
        itemCtrl.clearAllItems();

        // CLear all from the UI
        UICtrl.clearItems();

        // Get a total money
        const totalMoney = itemCtrl.getTotalMoney();

        // Show total money
        UICtrl.showTotalMoney(totalMoney);

    }


    return {
        start: function () {
            console.log("App started");


            // Clear all three btn
            UICtrl.clearEditState();

            const items = itemCtrl.getItem();

            if (items.length > 0) {

                UICtrl.populateItemList(items);

                // Get a total money
                const totalMoney = itemCtrl.getTotalMoney();

                // Show total money
                UICtrl.showTotalMoney(totalMoney);

                loadEventListeners();
            } else {
                console.log("NO Items");
            }
        }
    }


})();

App.start();




