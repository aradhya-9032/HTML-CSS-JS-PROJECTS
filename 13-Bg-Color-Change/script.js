const btn = document.getElementById("btn");
let hexCode = document.getElementById("hexCode");

// console.log(Math.floor(Math.random() * 16));

function randomColor() {
    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener("click", () =>{
    document.body.style.backgroundColor = randomColor();
    hexCode.innerHTML = randomColor();
});
