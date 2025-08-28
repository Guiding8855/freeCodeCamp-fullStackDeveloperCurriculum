console.log("Grocery shopping list");

/* Create an empty array */
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

/* .push Apples onto the end of the array */
shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

/* push Grapes onto the array */ 
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

/* unshift Vegetable Oil onto the start of the array */
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

/* push more values onto the end of the array */
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

/* pop the last item off the array */
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

/* unshift Chocolate Cake onto the start of the array */
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

/* shift the array, removing the first item */
shoppingList.shift();

/* change the first element in the array from Vegetable Oil to Canola Oil */ 
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));