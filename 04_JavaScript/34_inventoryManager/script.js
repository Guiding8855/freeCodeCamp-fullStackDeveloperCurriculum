let inventory = [];

// For a given product name, return its index in the inventory array, else return -1 if missing
// this looks like it works, but it doesn't pass the test cases for some reason
// function findProductIndex(name) {
//   for (const item in inventory) {
//     if (inventory[item].name.toLowerCase() === name.toLowerCase()) {
//       return item
//     } 
//   }
//   return -1
// };

// this is the same logic, just using a standard for loop, instead of for...in
// this passes the tests
function findProductIndex(name) {
  for (let i = 0; i <= inventory.length - 1; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      return i
    } 
  }
  return -1
};

function addProduct(obj) {
  // destructure the input object and force lower casing
  let {name, quantity} = obj;
  name = name.toLowerCase();

  // if the product exists in the inventory, update the quantity and log "name quantity updated"
  let index = findProductIndex(name);
  if (index >= 0) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } 
  // if it doesn't exist, push the product into the inventory and log "name added to the inventory"
  else {
    inventory.push({name, quantity});
    console.log(`${name} added to inventory`);
  }
};

function removeProduct(name, quantity) {
  // force to lowercase
  name = name.toLowerCase();

  let index = findProductIndex(name);
  if (index >= 0) {
    // Subtract the passed quantity from the product object and log a console message
    if (inventory[index].quantity - quantity > 0) {
      inventory[index].quantity -= quantity;
      console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
    }
    // If the quantity after subtraction is zero, remove the product object from inventory. 
    else if (inventory[index].quantity - quantity === 0) {
      inventory.splice(index, 1);
    }
    // If there is not enough quantity to perform the subtraction, log a message to the console
    else {
      console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    }
  }
  // if the product is not in inventory, log "<product name> not found"
  else {
    console.log(`${name} not found`);
  }
  return;
};

// test data - inventory will store product objects with name: str, quantity: int key-value pairs

// inventory.push({name: "beans", quantity: 5});
// inventory.push({name: "rice", quantity: 1});
// inventory.push({name: "lentils", quantity: 20});
// inventory.push({name: "FLOUR", quantity: 10});
// inventory.push({name: "chips", quantity: 7});

// test cases

// console.log(findProductIndex("flour")) // expect: index of flour to be returned
// console.log(findProductIndex("FloUr")) // expect: index of flour to be returned
// console.log(findProductIndex("Flour")) // expect: -1 if there's no flour in inventory
// console.log(findProductIndex("chips")) // expect: 4
// console.log(findProductIndex("hot sauce")) // expect: -1

// updating existing product in inventory

// console.log(inventory[findProductIndex("flour")]);
// addProduct({name: "flour", quantity: 5});
// console.log(inventory[findProductIndex("flour")]);

// // adding new product to inventory

// console.log(inventory[findProductIndex("hot sauce")]); // undefined
// addProduct({name: "hot sauce", quantity: 5}); 
// console.log(inventory[findProductIndex("hot sauce")]);

// removing a product

// removeProduct("flour", 5); // expect: flour not found

// addProduct({name: "flour", quantity: 10}); // add 10 flour 
// removeProduct("flour", 5); // expect: Remaining flour pieces: 5
// removeProduct("flour", 5);
// console.log(inventory); // expect: flour removed from inventory

// addProduct({name: "flour", quantity: 10}); // add 10 flour 
// removeProduct("flour", 15); // expect: Not enough flour available, remaining pieces: 10
