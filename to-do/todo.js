let listItem = document.getElementById("list_item");
let addButton = document.getElementById("add_button");
let inputValue = document.getElementById("input_val");
let li;
let taskItem;

addButton.addEventListener("click", () => {
  let getItems=JSON.parse(localStorage.getItem("tasks"))||[];
  taskItem = inputValue.value.trim();
  
  if (taskItem !== "") {
    getItems.push({
      task:taskItem,
      status:"pending"
    });
    listItem.innerHTML += `
    <li class="list_unity">
    <input type="checkbox" class="check">${inputValue.value}
    </li>
    
    `;
    inputValue.value = "";
  }
  let storeItems = localStorage.setItem("tasks", JSON.stringify(getItems));
});

let allItem = document.getElementById("all_button");

allItem.addEventListener("click", () => {
  let getItems=JSON.parse(localStorage.getItem("tasks"))||[];
  listItem.innerHTML = "";
  getItems.forEach((getItem) => {
    
      listItem.innerHTML += `
      <li class="list_unity">
      <input type="checkbox" class="check">${getItem.task}
      </li>
      
      `;
      
      inputValue.value = "";
  });
});
// let checkedItem = document.getElementsByClassName("check");
// let pendingItem = document.getElementById("pending_button");

// pendingItem.addEventListener("click", () => {
//   listItem.innerHTML = "";
//   getItems.forEach((getItem) => {
//     if (taskItem !== "" && getItem.checked) {
//       li = document.createElement("li");
//       li.classList.add("list_unity");
      
//       li.innerHTML += `
//       <input type="checkbox" class="check">${getItem}
      
//       `;
//     }
//     listItem.appendChild(li);
//     inputValue.value = "";
//   });
// });
// let completedItem = document.getElementById("completed_button");

// completedItem.addEventListener("click", () => {
//   listItem.innerHTML="";
//   getItems.forEach(getItem=>{
    
    
//     if (getItem.checked) {
//       li=document.createElement("li");
//       li.classList.add("list_unity")
      
//       li.innerHTML += `
//       <input type="checkbox" class="check">${getItem}
      
//       `;
//     }
//     listItem.appendChild(li)
//     inputValue.value="";
//   })
  

// });

// let clearAllItem = document.getElementById("clear_all_button");

// clearAllItem.addEventListener("click", () => {
//   listItem.textContent = "";
// });
