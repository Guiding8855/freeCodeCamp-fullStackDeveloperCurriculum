const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr
};

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr
};

function removeLastLunch(arr) {
  if (arr.length > 0) {
    const lastLunch = arr.pop();
    console.log(`${lastLunch} removed from the end of the lunch menu.`);
    return arr
  }
  else {
    console.log("No lunches to remove.");
    return arr
  } 
};

function removeFirstLunch(arr) {
    if (arr.length > 0) {
    const firstLunch = arr.shift();
    console.log(`${firstLunch} removed from the start of the lunch menu.`);
    return arr
  }
  else {
    console.log("No lunches to remove.");
    return arr
  } 
};

function getRandomLunch(arr) {
  if (arr.length > 0) {
    const maxIndex = arr.length - 1;
    /* Math.random() * (max - min) + min gives a random number between two values */
    /* No need for min in this equation since minIndex = 0 */
    const randomIndex = Math.round( Math.random() * (maxIndex) );
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
  else {
    console.log("No lunches available.");
  }
};

function showLunchMenu(arr) {
  if (arr.length > 0) {
    const menuStr = arr.join(", ");
    console.log(`Menu items: ${menuStr}`);
  }
  else {
    console.log("The menu is empty.");
  }
};

addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

addLunchToStart(lunches, "Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

removeLastLunch([]);
removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

removeFirstLunch([]);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

getRandomLunch([]);
getRandomLunch(lunches);

showLunchMenu([]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);