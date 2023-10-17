const body = document.body
const list = document.querySelector("ol")
const btn = document.querySelector("button")
const newBtn = document.getElementById("new car")
const input = document.querySelector("input")


btn.addEventListener("click", function(e){

    let carInList = false

  let isInputValid = stringRegex(input.value)

    if (input.value.length>0 && isInputValid ){
        for(let i=0; i<list.children.length; i++){
            console.log(list.children[i].innerHTML.toLowerCase())
            
            if (input.value.toLowerCase() === list.children[i].innerHTML.toLowerCase){
                carInList = true
            }
        }
        if(carInList){
           alert("Car already in list")
        }else{
            const newItem = document.createElement("li")
           newItem.innerHTML = input.value
           list.append(newItem)
        }    
    }else{
        alert("Invalid input")
    }

    
   input.classList.add("dontDisplay")
})

newBtn.addEventListener("click" , function(e){
    input.classList.remove("dontDisplay")
    input.classList.add("display")
})


function stringRegex(param) {
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(param);
}