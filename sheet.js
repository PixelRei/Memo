document.addEventListener("DOMContentLoaded", ()=>{
    //bottoni e div
    const start = document.getElementById("ButtonStart");
    const first = document.querySelector(".start");
    const second = document.querySelector(".loading");
    const third = document.querySelector(".test");
    //immagini
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2");
    const img3 = document.getElementById("image3");
    const img4 = document.getElementById("image4");
    const img5 = document.getElementById("image5");
    const img6 = document.getElementById("image6");
    const img7 = document.getElementById("image7");
    const img8 = document.getElementById("image8");
    const img9 = document.getElementById("image9");
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const imgChosen = images[Math.floor(Math.random() * images.length)];


    start.addEventListener("click", function(){
        first.style.display = "none";
        second.style.display = "flex";
        for(let i=0; i<images.length; i++){
            images[i].style.visibility = "hidden";
        }
        let interval = setInterval(function(){
            showImages();
        }, 1000);
        setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                images.forEach(img => img.style.visibility = "visible");
                second.style.display = "none";
                third.style.display = "flex";
                document.getElementById("TestImage").src = imgChosen.src;
            }, 1000); 
        }, 10000);
    });

    function showImages(){
        let n = Math.floor(Math.random()*images.length);
        images[n].style.visibility = "visible";
        setTimeout(function(){
            images[n].style.visibility = "hidden";
        }, 1000);
    }
});