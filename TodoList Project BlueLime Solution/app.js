//retrieve data from local storage
function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add(){
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    clearDefault();
    return false; //avoids any futher action with click event
}

//clear the task value from input box
function clearDefault(){
    document.getElementById('task').value = '';
};

//remove tasks from the list
function remove(){
    var id = this.getAttribute('id');//refers to current DOM element
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false; //avoids further action with click event
}

function show(){
    var todos = get_todos();

    var html = '<ul>';
    for(var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
    html += '</ul>';
 console.log(html);
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for(var i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);

show();