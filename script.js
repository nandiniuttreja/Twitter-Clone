const input = document.querySelector(".input-todo");
const list = document.querySelector(".ul-tweet");
const btn = document.querySelector(".btn");

function addTodo(event) {
    event.preventDefault();
    const todoName = input.value;

    const li = document.createElement("li");
    const new_p = document.createElement("p");
    const del_btn = document.createElement("button");
    del_btn.classList.add("del");
    del_btn.textContent = "Delete";
    del_btn.style.color = "black";
    del_btn.style.backgroundColor = "#f4f4f6";
    del_btn.style.cursor = "pointer";

    del_btn.style.padding = "6px";
    del_btn.style.fontSize = "17px";
    del_btn.style.fontWeight = "bold";
    del_btn.style.boxShadow = "0px 1px 3px white";
    del_btn.style.boxShadow = "-1px -1px 3px white";
    del_btn.style.borderRadius = "6px";

    // color: black;
    // padding: 6px;
    // border-radius: 10px;
    // font-size: 17px;
    // background-color: white;
    // font-weight: bold;
    // box-shadow: 0px 1px 3px white;
    new_p.textContent = todoName;
    li.appendChild(new_p);
    li.appendChild(del_btn);
    list.appendChild(li);


    // li.textContent = todoName;
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

function removeTodo(event) {
    const clicked  = event.target;
    const clickedIsDelBtn = clicked.matches(".del");
    if(clickedIsDelBtn){
        const delLi = clicked.parentElement;
        delLi.style.display = "none";
    }
}


btn.addEventListener("click",addTodo);
list.addEventListener("click",removeTodo);