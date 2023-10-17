/*
1.name input is empty do not pass
2.name is correct pass alert back to user
3.name meet length requirement
4.check if name is string
5.if error point out to user
6.if success point out to user
*/







const body = document.body
const nameInput = document.getElementById("name");
const lnameInput = document.getElementById("lname");
const form = document.querySelector("form");
const emailInput = document.getElementById("email")

function checkName(param) {
    let res = false;
    if (param.value.length >= 2 && param.value.length <= 20) {
        res = stringRegex(param.value);
        Success(param)
        }else{
        error(param,"does not meet required length")
    }
    return res;
}

function error(param,message){
    const outputmessage = document.querySelector("small")
    outputmessage.textContent = message
    param.style.borderColor = "red"
    outputmessage.style.color = "red"
}


function Success(param){
    param.style.borderColor = "green"
}

function stringRegex(param) {
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(param);
}

function checkEmail(){
    let res = false
    if (emailInput.value.length>0){
        res = emailRegex(emailInput.value)
    }
    return res
}

function emailRegex(param){
    const pattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    return pattern.test(param);
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    var firstNameOutcome = checkName(nameInput);
    var lastNameOutcome = checkName(lnameInput);
    var emailOutcome = checkEmail()

    if (firstNameOutcome  && lastNameOutcome && emailOutcome ) {
        alert("Form passes");
    } else {
        alert("Form fails");
    }
});