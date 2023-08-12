/*create a condition statement for grading papers score 90 and above is A*
score above 80 is A
score above 70 is B
score above 60 is c
and everything below is a fail */

var score = 100

if(score>=90){
    console.log("A*")
}else if(score>=80 && score<90){
    console.log("A")
}else if(score>=70 && score<80){
    console.log("B")
}else if(score>=60 && score<70){
    console.log("C")
}   else{
    console.log("fail")
}