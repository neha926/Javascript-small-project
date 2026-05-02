let followContainer = document.getElementById("follow_Container");
let followContent = document.getElementById("follow_Content");
let dropDownArrow = document.getElementById("drop_down_arrow");
dropDownArrow.style.display = "none";
let followBtn = false;

followContainer.addEventListener("click", () => {
  setTimeout(() => {
    if (!followBtn) {
      followContent.innerHTML = `
                <span id="follow_Content">Followed</span>
                <i class="fa-solid fa-angle-down" id="drop_down_arrow"></i>
            `;
      followBtn = true;
    } else {
      followContent.textContent = Follow 
            followBtn = false;
            
    }
  }, 1000);
});
// dropDownArrow.addEventListener("click",()=>{

// })
