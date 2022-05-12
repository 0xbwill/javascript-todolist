// CONST declaration
const inputTodo = document.querySelector(".todo-input");
const pushTodo = document.querySelector(".todo-push");
const todoContainer = document.querySelector(".todo-container");

// Déclaration Event Listener
pushTodo.addEventListener("click", newTodo);
todoContainer.addEventListener("click", deleteTodo);

// Fonctions
function newTodo(e) {
  // CREATE '<div>'
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // CREATE '<li>'
  const newTodo = document.createElement("li");
  newTodo.innerText = inputTodo.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // CREATE 'Validé' button
  const checkTodo = document.createElement("button");
  checkTodo.innerHTML = "Validé";
  checkTodo.classList.add("check-btn", "btn", "btn-success");
  todoDiv.appendChild(checkTodo);

  // CREATE 'Supprimer' button
  const deleteTodo = document.createElement("button");
  deleteTodo.innerHTML = "Supprimer";
  deleteTodo.classList.add("trash-btn", "btn", "btn-danger");
  todoDiv.appendChild(deleteTodo);

  // INSERT todoDiv IN todoContainer
  todoContainer.appendChild(todoDiv);
  console.log('Tâches "' + inputTodo.value + '" ajoutée avec succès !');
  inputTodo.value = "";
}

function deleteTodo(e) {
  // console.log(e.target);
  const item = e.target;

  // CHECK 'trash-btn' pressed ?
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  // CHECK 'check-btn' pressed ?
  if (item.classList[0] === "check-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("validated");
  }
}

let users = [
  {
    name: "Moussa",
    age: 22,
  },
  {
    name: "Adama",
    age: 27,
  },
  {
    name: "Djiby",
    age: 30,
  },
  {
    name: "Moustapha",
    age: 22,
  },
  {
    name: "Binta",
    age: 25,
  },
  {
    name: "Ahmed",
    age: 18,
  },
  {
    name: "Elvis",
    age: 25,
  },
];
