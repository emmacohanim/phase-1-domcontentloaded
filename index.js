// Your code goes here
document.addEventListener("DOMContentLoaded",
function() {
    console.log("The DOM has loaded")

// const text = document.getElementById("text")
// text.textContent = "This is really cool!"
let p = document.getElementById("text")
p.addEventListener("click", function() {
    console.log("Clicked!")
})
p.textContent = "This is really cool!"
})

//Putting the script in the head
//-speed up page loading time bc request to fetch javascript comes sooner