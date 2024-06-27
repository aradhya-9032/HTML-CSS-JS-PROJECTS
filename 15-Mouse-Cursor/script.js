const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {
    moveCursor(event.pageX, event.pageY);
     
    //  event.pageX --> acros
    //  event.pageY --> up and down 
    console.log(event);
    // console.log('pageX',event.pageX);
    // console.log('pageY',event.pagey);
});

const moveCursor = function(pageX, pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
}


