//Write a conditional statement that takes into consideration validations (i.e case sensitivity
var day = "tuesday"

if (typeof day === "string"){
    if(day.toLowerCase()==="tuesday"){
        console.log("thats a day of the week")
    }else{
        console.log("i do not recognise that day")
    }
}else{
    console.log("error variable does not contain a string")
}

//Write a conditional statement that prints whether the phone being used is an Iphone or an android
var phone = "iphone".toLowerCase()

if (typeof phone === "string"){
    if(phone === "iphone"){
        console.log("phone is an iphone")
    }else{
        console.log("phone is an android")
    }
}

//Write a switch case that checks if the operation is a math operation (+,-,*,/) if the options is any of the options given it should give me the result of 2 variables created above the switch case. For example. math operation is * and the variables are 250 & 10 then the answer should log 2500

var num1 = 10
var num2 = 10
var operation = "subtraction"

if (typeof operation === "string"){
    switch (operation){
            case "addition":
               console.log(num1+num2)
            break;
            case "subtraction":
                console.log(num1-num2)
                break
            case "multiplication":
                console.log(num1*num2)
                break
            case "division":
                console.log(num1/num2)
                break;
            default:
                console.log("do not recognise that operator")
                break;            
    }
}else {
    console.log("Operation should be a string");
}
