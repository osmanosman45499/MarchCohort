//function

function printAge(age,name){
console.log(age)
console.log(name)


}

printAge("osman" ,089)


/*function multiply(p1,p2){
    console.log(p1*p2)
}

multiply(450,2)*/

var answer = multiply(6,2)

function multiply(num1,num2){
    ans = num1*num2
    return ans
}

function addition(num){
    var answer = multiply(5,10)
    console.log(answer + num)
}
addition(20)

//create 2 functions, celsius function this outputs temperature in C and a converter function that changes C to fahrenheit

//(0° x 9/5) + 32 = 32°F 

function celsius(num){
    return num
}

console.log(celsius(0))

function celsiusToFahrenheit(num){
    var converter = celsius(num)
    var fahrenheit = (converter*9/5)+32
    console.log(fahrenheit + "°F")
}

celsiusToFahrenheit(25)