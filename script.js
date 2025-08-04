
// Capture elements by their IDs
const user_input = document.getElementById('todo-input');
const todo_form = document.getElementById('todo-form');
const todo_list_ul = document.getElementById('todo-list');

// total number of task 
let total_task_count = 0;
// Store todos in an array
const todos = [];

// Function to render todos
function get_todos() {
  // Clear the current list
  todo_list_ul.innerHTML = "";

  // Loop through todos and create list items
  todos.forEach((todo, index) => {
    // Create li element
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo;
     
    li.addEventListener('click',()=>{
      li.className+=" completed";
    });

    // Create delete button
    const delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger btn-sm";
    delete_button.textContent = "Delete";

    // Add delete functionality
    delete_button.addEventListener("click", () => {
      todo_delete(index);
    });

    // Append delete button to li, then li to ul
    li.appendChild(delete_button);
    todo_list_ul.appendChild(li);

    // create an update button 
    const update_button = document.createElement('button');
    update_button.className = "btn btn-success btn-sm";
    update_button.textContent = "Update";

    // Add update functionality
    update_button.addEventListener("click", () => {
        todo_update(index);
    });

    // Append update button to the list 
    li.appendChild(update_button);
  });
}

// Delete a todo by index
function todo_delete(index) {
  todos.splice(index, 1);
  total_task_count--;
  check_total();
  get_todos();
}

// Update a todo bu index
function todo_update(index){
    const present_todo = todos[index];
    const edited_todo = prompt("write new todo", present_todo);

     if (edited_todo !== null && edited_todo.trim() !== "") {
    todos[index] = edited_todo.trim();
    get_todos();
  }
}

// Add a new todo
function add_todo(todotext,user_text) {
  if (user_text.trim() === ""){
    alert("Please Write  Something\n");
    return ;
  }
  todos.push(todotext.trim());
  get_todos();
  user_input.value = '';
}

// Listen for form submit event
todo_form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  total_task_count++;
  let user_value_with_number=`${total_task_count} -- ${user_input.value}`;
  check_total();
  add_todo(user_value_with_number,user_input.value);
});


function check_total(){
  if(total_task_count === 0 ){
   // Clear the current list
  todo_list_ul.innerHTML = "";
const alertContainer = document.getElementById('alertContainer'); 

const newAlert = document.createElement('div');

// Add the necessary Bootstrap classes
newAlert.classList.add('alert', 'alert-success');
newAlert.setAttribute('role', 'alert'); // Set the role attribute

// Set the inner HTML content of the alert
newAlert.innerHTML = 'Hurryee ,, There Is no Task for today';

// Append the new alert to the container
if (alertContainer) {
    alertContainer.appendChild(newAlert);
} else {
    console.error("Target element with ID 'alertContainer' not found.");
}
}
}


