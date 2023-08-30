//supposedly we have a list of numbers [1,2,3,45,90,125,2001,1001]
//identify and print the largest number in the array. e.g example above 2001 should be the answer

//var array  = [1,2,3,45,90,125,2001,1001]
//console.log(Math.max(...array))

/*var array = [1,2,3,45,90,125,2001,1001,9090]
console.log(Math.max(...array))

function findLargestValue(array){
    var list = [0]
    for (let i=0; i<array.length;i++){
        if(list[0]<array[i]){
            console.log(list)
            console.log(list[0]>array[i])
            list.shift()
            list.push(array[i])
        }
    }
    console.log(list)
}

findLargestValue(array)*/
        
//lets say we have a word “thequickbrownfoxjumsoverthelazydog” remove every character that appears more than once (will need to search for a method in js that checks if a string holds the same character already). so the answer should reveal “thequickbrownfxjmpsvlazydg”

var word1 = "thequickbrownfoxjumpsoverthelazydog"
var word2 = []

function repeatedCharacters(word){
    word = word1.split('')
    
    for(let i=0; i<word1.length;i++){
        
        if(word2.includes(word[i])){
            console.log("nothing")

        }else{
            word2.push(word[i])
        }
    }
    console.log(word2.join(''))
}

repeatedCharacters(word1)


var word1 = "thisissomethingthatcontainsnothing"
var word2 = []

for (let i=0; i<word1.split("").length; i++){
    if(!word2.includes(word1.split('')[i])){
        word2.push(word1.split('')[i])
    }
}
console.log(word2.join(''))