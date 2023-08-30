//objects

/*const car = {
    name:"Vauxhall" 
    ,colour:"grey" 
    ,make:2019
    ,type: ["Corsa se nav hatchback"]
}*/

/*console.log(car)
car.type[0] = "Corsa electric GS"
car.colour = "Black"
car.owner = "Ozzy"
console.log(car)

const item = {
    img: "set",
    title: "title of product",
    price: "price of product"
}*/

/*const person = {
    firstName: "Maria",
    lastName: "Carter",
    age: 28,
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}*/

//console.log(person.fullName())

function person(name,lastName,age,gender){
    this.firstName = name
    this.lastName = lastName
    this.age = age
    this.fullName = function(){
        return this.firstName + " " + this.lastName
    }

    if(gender){
        this.gender = gender
    }else{
        this.gender = "male"
    }
}

const Osman = new person("Osman","Abdulkadir",22);
const John = new person("John","Smith",35);
const Mary = new person("Mary","Jane",32,"female")

console.log(Osman)
console.log(John)
console.log(Mary)