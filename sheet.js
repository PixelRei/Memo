document.addEventListener("DOMContentLoaded", ()=>{
    const start = document.getElementById("ButtonStart");
    const first = document.querySelector(".start");
    const second = document.querySelector(".test");

    
    start.addEventListener("click", function(){
        first.style.display = "none";
        second.style.display = "flex";
    });
});