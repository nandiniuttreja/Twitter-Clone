const input = document.querySelector(".input-todo");
const list = document.querySelector(".ul-tweet");
const btn = document.querySelector(".btn");

function addTodo(event) {
    event.preventDefault();
    const todoName = input.value;

    const li = document.createElement("li");
    
    list.appendChild(li);
    li.textContent = todoName;
    li.style.color = "white";
    li.style.backgroundColor = "#7d95ad15";
    li.style.borderColor = "white";
    li.style.borderWidth = "2px";
    li.style.borderRadius = "6px";
    li.style.borderStyle = "solid";
    li.style.padding = "17px";
    li.style.margin = "23px";
    li.style.listStyle = "none";
    input.value = "";
    console.log(todoName);
}

btn.addEventListener("click",addTodo);