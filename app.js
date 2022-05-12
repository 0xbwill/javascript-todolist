// Déclaration variable
// Saisi Todo
const inputTodo = document.querySelector(".todo-input");
const pushTodo = document.querySelector(".todo-push");
// Intéraction Todo
const todoContainer = document.querySelector(".todo-container");

// Déclaration Event Listener
pushTodo.addEventListener("click", newTodo);
todoContainer.addEventListener("click", deleteTodo);

// Fonctions
function newTodo(e) {
  // Création de la div qui va accueilir notre tâche
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Création d'un <li></li>
  const newTodo = document.createElement("li");
  newTodo.innerText = inputTodo.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Création d'un <button>Supprimer</button>
  const checkTodo = document.createElement("button");
  checkTodo.innerHTML = "Validé";
  checkTodo.classList.add("check-btn", "btn", "btn-success");
  todoDiv.appendChild(checkTodo);
  // Création d'un <button>Supprimer</button>
  const deleteTodo = document.createElement("button");
  deleteTodo.innerHTML = "Supprimer";
  deleteTodo.classList.add("trash-btn", "btn", "btn-danger");
  todoDiv.appendChild(deleteTodo);


  todoContainer.appendChild(todoDiv);
  inputTodo.value = "";
}

function deleteTodo(e) {
  console.log(e.target)  
  const item = e.target;
  // Si clique sur le boutton Supprimer
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  // Si clique sur le bouton Validé
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("validated");
  }
}
