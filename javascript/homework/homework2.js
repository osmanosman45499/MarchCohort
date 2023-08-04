//q1
var ListOfItems = ["banana", "milk", "cream cheese", "crossiant", "chocolate", "orange juice", "water", "tissue", "ice cream", "bread", "cookie", "crisps", "biscuits", "cheese", "cereal"]
ListOfItems.pop()
ListOfItems.push("apple")


//console.log(ListOfItems[0])
//console.log(ListOfItems[ListOfItems.length-1])
//console.log(ListOfItems[14])
//console.log(ListOfItems[7])

ListOfItems[7] = "grape"
ListOfItems[14] = "chocolate chip"
ListOfItems[0] = "watermelon"

//ListOfItems.splice(0,2)
//ListOfItems.pop()
//ListOfItems.pop()
ListOfItems.shift()
ListOfItems.shift()

ListOfItems.unshift("spaghetti")


console.log(ListOfItems)

console.log(`Item 1 = ${ListOfItems[0]} other items are ${ListOfItems[ListOfItems.Length-1]} & ${ListOfItems[6]}`)




