//q1 1. **Write a conditional statement that takes into consideration validations (i.e case sensitivity). this will be entire up to you as to what the conditional statement is on**

var hero = "hulk"

if (hero === "wolverine" || hero === "hulk" || hero === "spiderman" || hero === "thor" || hero === "captain america"){
    console.log(`${hero} is a marvel character `)
}else if(hero === "batman" || hero === "superman" || hero === "cyborg" || hero === "robin" || hero === "aquaman")
    console.log(`${hero} is a DC character `)
else{
    console.log(`sorry i do not recognise ${hero}`)
}

//2write a conditional statement taking age as variable and what year group they will be in a school (i.e 11-16 will be secondary school year group, 16-18 college anyone above optional education). (if this does not make sense please watch the summary video or the youtube video pasted above)


const age = 78

if ( typeof age === "string"){
    console.log("error")
}
else if(age >=11 && age<16){
    console.log("you are in secondary school")
}else if (age>=16 && age<=18){
    console.log(" you are in college")
}else if(age >18 && age<90){
    console.log("optional education")
}else if(age<11 && age>3){
    console.log("primary school")
}else{
    console.log("error 2")
}




/*Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. if above 5 print out error and if less than 5 print out error. ( would suggest searching greater than and less than operators)*/

var array = ["banana", "bread", "chocolate", "pasta", "milk",]

//nested conditional
if(typeof array != "object" ||array.length<5){
    console.log("error")
}else{
    console.log("list has 5 items")
}

if(typeof array != "object"){
    console.log("error")
}else{
    if(array.length>=5 && array.length<10){
        console.log("list has correct number of items")
    }else{
        console.log("error incorrect")
    }
}


