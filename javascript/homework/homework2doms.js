const body = document.body
const btn = document.querySelector("button")

var array = ["green", "blue", "purple", "pink", "yellow", "coral", "black"]

function changeColour(e){
   var generator = Math.floor(Math.random()*array.length)
   console.log(array[generator])
   body.style.backgroundColor = array[generator]
}

btn.addEventListener("click", changeColour)

var res = prompt("what colour would you like to add to the background?")

//console.log(res > 0)
if(res.length>0){
    colour(res)
}

function colour(colour){
    if (array.includes(colour)){
        alert("colour is in the list")
        question()
    }else{
        array.push(colour)
    }
}

function question(){
    var res = prompt("what colour would you like to add to the background?")
    colour(res)
}

console.log