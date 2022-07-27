console.log("Working")
function changeColor(){
    let button = document.getElementById("button")
    let div = document.getElementById("div")

    if (div.style.backgroundColor === "red") {
        div.style.backgroundColor = "green"
    }
    else {div.style.backgroundColor = "red"

    }
}
  
        