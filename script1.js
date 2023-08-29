const input = document.querySelector(".input-todo");
const list = document.querySelector(".ul-tweet");
const btn = document.querySelector(".btn");

function addTodo(event) {
  event.preventDefault();
  const todoName = input.value;
  if (todoName != "") {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    const new_p = document.createElement("p");
    const del_btn = document.createElement("button");
    const edit_btn = document.createElement("button");

    const div2 = document.createElement("div");
    
    new_p.classList.add("edit_p");
    new_p.style.fontSize = "19px";
    new_p.style.paddingTop="10px";

    del_btn.classList.add("del");
    del_btn.textContent = "Delete";
    del_btn.style.color = "black";
    del_btn.style.backgroundColor = "#f4f4f6";
    del_btn.style.cursor = "pointer";
    del_btn.style.backgroundColor="#00acee";
    del_btn.style.color="white";

    del_btn.style.padding = "11px 19px";
    del_btn.style.fontSize = "16px";
    del_btn.style.fontWeight = "bold"; 
    del_btn.style.borderRadius = "19px";


    //edit 

    edit_btn.textContent = "Edit";
    edit_btn.classList.add("edit");
    edit_btn.style.color = "black";
    edit_btn.style.backgroundColor = "#f4f4f6";
    edit_btn.style.cursor = "pointer";
    edit_btn.style.backgroundColor="#00acee";
    edit_btn.style.color="white";

    edit_btn.style.padding = "11px 19px";
    edit_btn.style.fontSize = "16px";
    edit_btn.style.fontWeight = "bold"; 
    edit_btn.style.borderRadius = "19px";

    new_p.textContent = todoName;

    li.appendChild(new_p);
    li.appendChild(div2);

    div2.appendChild(del_btn);
    div2.appendChild(edit_btn);

    list.appendChild(li);

    // li.textContent = todoName;
    li.style.color = "white";
    li.style.backgroundColor = "#7d95ad15";
    li.style.borderColor = "#181818";
    li.style.borderWidth = "1px";
    li.style.borderRadius = "3px";
    li.style.borderStyle = "solid";
    li.style.padding = "10px";
    li.style.margin = "17px";
    li.style.listStyle = "none";
    li.style.width = "550px";

    input.value = "";
    console.log(todoName);
  }
}

function removeTodo(event) {
  const clicked = event.target;

  const clickedIsDelBtn = clicked.matches(".del");
  if (clickedIsDelBtn) {
    const delLi = clicked.parentElement.parentElement;
    delLi.style.display = "none";
  }
}

function editToDo(event) {
  const clicked = event.target;
  const clickedIsEditBtn = clicked.matches(".edit");
  if (clickedIsEditBtn == false) {
    return;
  } else {
    const change = prompt("Edit Your Post:");
    document.querySelector(".edit_p").textContent = change;  
  }
} 

btn.addEventListener("click", addTodo);
list.addEventListener("click", removeTodo);
list.addEventListener("click", editToDo);


document.getElementById("showThis").style.display = "none";
document.getElementById("following-toggle").style.borderBottom = "3px solid #50b7f5";

function toggleFollowing() {
  document.getElementById("following-toggle").style.borderBottom = "3px solid #50b7f5";
  document.getElementById("foryou-toggle").style.borderBottom = "0px";
  document.getElementById("showThis").style.display = "none";
  document.getElementById("tntt").style.display = "block";
}

function toggleForYou() { 
  document.getElementById("foryou-toggle").style.borderBottom = "3px solid #50b7f5";
  document.getElementById("following-toggle").style.borderBottom = "0px";
  document.getElementById("tntt").style.display = "none";
  document.getElementById("showThis").style.display = "block";
}