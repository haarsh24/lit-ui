const baseButton = document.querySelector(".base")
const stackButton = document.querySelector(".stack")
const leadButton =  document.querySelector(".lead")

const baseline = document.getElementById("baseline");
const stacked = document.getElementById("stacked");
const leading = document.getElementById("leading");

leadButton.addEventListener("click" ,()=>{
    baseline.style.display="none";
    stacked.style.display="none";
    leading.style.display="flex";
})
stackButton.addEventListener("click" ,()=>{
    baseline.style.display="none";
    stacked.style.display="flex";
    leading.style.display="none";
})
baseButton.addEventListener("click" ,()=>{
    baseline.style.display="flex";
    stacked.style.display="none";
    leading.style.display="none";
})