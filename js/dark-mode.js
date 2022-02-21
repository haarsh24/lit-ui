var toggle = document.querySelector("#dark-mode-toggle");
toggle.addEventListener("click", e=> {
    console.log("click")
    document.body.classList.toggle('dark-mode');
});


function onload() {
  console.log("function on load")
    
    }