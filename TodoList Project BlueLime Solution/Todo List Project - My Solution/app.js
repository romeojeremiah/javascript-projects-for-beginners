//grab the form and prevent default submission behavior
let form = document.getElementById('form');

//items array for new items
let items = [];

//function call to check local storage and display items, if any.
displayLocalStorage();

//submit new items to todolist
form.addEventListener('submit', function(e){
    e.preventDefault();
    //grab input from
    let todoInput = document.getElementById('todo-input').value;
    //if input is blank do nothing
    if (todoInput === ""){
        alert('Please enter valid input!');
    }
    else {
        //display items
        displayItems(todoInput);
        //Place todoItem in localStorage
        storeItem(todoInput);
        //Clear the todo item field
        document.getElementById('todo-input').value = '';
        //add an event listener to the delete button
        addDeleteFunction(todoInput);
    }
});

//function to store items in local storage
function storeItem(item){
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));
};

//function to display items in the DOM
function displayItems(todoInput){
    //create a li tag for the element
    let todoItem = document.createElement('li');
    
    todoItem.innerHTML = `${todoInput}<div class="delete-item">Delete</div>`;
    //Display the todo item
    let todoList = document.querySelector('ul');
    todoList.appendChild(todoItem);
};

function displayLocalStorage(){
    let storage = localStorage.getItem('item');
    
    if (storage === null){
        items = [];
    } else {
        let storageParsed = JSON.parse(storage);
        storageParsed.forEach(function(storageItem){
            displayItems(storageItem);
        })
    };
};

function addDeleteFunction(todoInput){
    
    let deleteButton = document.querySelectorAll('.delete-item');
    
    deleteButton.forEach(function(button, index){
        button.addEventListener('click', function(e){
            console.log(e.path[1].childNodes);
           
            //remove index number from localStorage
           let deletedStorage = localStorage.getItem('item');
           let deletedStorageParsed = JSON.parse(deletedStorage);

                deletedStorageParsed.splice(index, 1);
                console.log(deletedStorageParsed);
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            if(deletedStorageParsed.length === 0){
                let todoList = document.querySelector('ul');
                todoList.innerHTML = '';
                let todoItem = document.createElement('li');
                todoItem.innerHTML = `No more todos!`;
                
                todoList.appendChild(todoItem);
                displayLocalStorage();
               
                
                

            } else {
                localStorage.setItem('item',JSON.stringify(deletedStorageParsed));
            }
            

        })
    })
}