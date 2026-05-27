
let listItem = document.getElementById("list_item");
let addButton = document.getElementById("add_button");
let inputValue = document.getElementById("input_val");
let li;
let taskItem;
let items = [];
let getItems=JSON.parse(localStorage.getItem("todo"));

addButton.addEventListener("click", () => {
  taskItem = inputValue.value.trim();
  items.push(taskItem);

  if (taskItem !== "") {
    listItem.innerHTML += `
    <li class="list_unity">
    <input type="checkbox" class="check">${inputValue.value}
    </li>
    
    `;
    inputValue.value = "";
  }
  let storeItems = localStorage.setItem("todo", JSON.stringify(items));
});

let allItem = document.getElementById("all_button");

allItem.addEventListener("click", () => {
  listItem.innerHTML = "";
  getItems.forEach((getItem) => {
    if (taskItem !== "") {
      li = document.createElement("li");
      li.classList.add("list_unity");
      
      li.innerHTML += `
      <input type="checkbox" class="check">${getItem}
      `;
    }
    listItem.appendChild(li);
    inputValue.value = "";
  });
});
let checkedItem = document.getElementsByClassName("check");
let pendingItem = document.getElementById("pending_button");

pendingItem.addEventListener("click", () => {
  listItem.innerHTML = "";
  getItems.forEach((getItem) => {
    if (taskItem !== "" && !getItem.checked) {
      li = document.createElement("li");
      li.classList.add("list_unity");
      
      li.innerHTML += `
      <input type="checkbox" class="check"><label for="checkbox">${getItem}</label>
      
      `;
    }
    listItem.appendChild(li);
    inputValue.value = "";
  });
});
let completedItem = document.getElementById("completed_button");

completedItem.addEventListener("click", () => {
  listItem.innerHTML="";
  getItems.forEach(getItem=>{
    
    if (getItem.checked) {
      li=document.createElement("li");
      li.classList.add("list_unity")
      
      li.innerHTML += `
      <input type="checkbox" class="check">${getItem}
      
      `;
    }
    listItem.appendChild(li)
    inputValue.value="";
  })
});

let clearAllItem = document.getElementById("clear_all_button");

clearAllItem.addEventListener("click", () => {
  listItem.textContent = "";
});
