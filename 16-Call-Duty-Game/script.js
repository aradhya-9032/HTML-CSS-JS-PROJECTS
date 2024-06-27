const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContaier = document.querySelector(".trailer-container");

btn.addEventListener("click",()=>{
    trailerContaier.classList.remove("active");
});
closeBtn.addEventListener("click", () =>{
    trailerContaier.classList.add("active");
});
closeIcon.addEventListener("click", ()=>{
    trailerContaier.classList.add("active");
    video.pause();
    video.currentTime = 0;
})

