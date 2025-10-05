function pyramid(char, numRows, isInverted) {
  let returnStr = "\n";

  if (isInverted) {
    for (let i = numRows; i > 0; i--) {
      returnStr += " ".repeat(numRows - i) + char.repeat(2 * i - 1) + "\n";
    }
  } else {
    for (let i = 1; i <= numRows; i++) {
      returnStr += " ".repeat(numRows - i) + char.repeat(2 * i - 1) + "\n";
    }
  }

  return returnStr;
};

// tests
console.log(pyramid("o", 4, false)); // "\n   o\n  ooo\n ooooo\nooooooo\n"
// console.log("\n   o\n  ooo\n ooooo\nooooooo\n");

console.log(pyramid("p", 5, true)); // "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n"
// console.log("\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n");

// workings
// console.log("\n");
// console.log("   o\n");
// console.log("  ooo\n");
// console.log(" ooooo\n");
// console.log("ooooooo\n");


// console.log(" ".repeat(4 - 1) + "o".repeat(1) + "\n"); // "o".repeat = 2i - 1
// console.log(" ".repeat(4 - 2) + "o".repeat(3) + "\n");
// console.log(" ".repeat(4 - 3) + "o".repeat(5) + "\n");
// console.log(" ".repeat(4 - 4) + "o".repeat(7) + "\n");

// console.log(" ".repeat(4 - 4) + "o".repeat(7) + "\n");
// console.log(" ".repeat(4 - 3) + "o".repeat(5) + "\n");
// console.log(" ".repeat(4 - 2) + "o".repeat(3) + "\n");
// console.log(" ".repeat(4 - 1) + "o".repeat(1) + "\n"); // "o".repeat = 2i - 1

