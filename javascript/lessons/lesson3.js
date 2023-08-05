//conditional statements

let name = "osman"
var age = 22
let array = ["oranges", "banana", "milkshake"]

//single "=" is for settign variable
//double "==" 1 "1"
//triple "===" 1 "1"

//logic gates
//AND gate (&&)
//OR gate (||)

//console.log(1==="1")
//console.log(1=="1")

//if (name === "osman" || age === 22){
//   console.log(`Hello ${name} welcome back`)
//  array[0] = "cheese"
//  array[1] = "steak"
// array[2] = "pasta"
//}else{
   // console.log("idk you")
//}
//---------

if (name && typeof name === "string"){
    console.log(`Hello ${name} welcome back`)
}else{
    console.log("ERROR")
}


//console.log(name)
//console.log(array)

//console.log(3>4)

if (array.length>2){
    console.log("array reaches criteria")
}else{
    console.log("ERROR")
}

//---------------
/*if (condition){
    doThis
}else if(condition){
    doThis
}else{
    doThis
}*/

let day ="thursday"

if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
    console.log(`${day} is a weekday`)
}else if (day === "saturday" || day === "sunday"){
    console.log(`${day} is a weekend`)
}else{
    console.log("Not possible")
}
