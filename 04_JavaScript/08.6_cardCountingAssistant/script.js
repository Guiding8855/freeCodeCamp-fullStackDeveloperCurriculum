let count = 0;

function cardCounter (card) {
  if (card <= 6) {
    count++;
  } else if (
    card === 10 || 
    card === "J" || 
    card === "Q"|| 
    card === "K"|| 
    card === "A") {
    count--;
  };

  // if count positive, return string with current count and Bet.
  // if count <= 0, return string with current count and Hold.
  return count > 0 ? `${count} Bet` :  `${count} Hold`;
};

// test cases
// cardCounter(2);
// cardCounter(3);
// cardCounter(4);
// cardCounter(5);
// console.log(cardCounter(6)) // expected result: 5 Bet - pass;

// cardCounter(7);
// cardCounter(8);
// console.log(cardCounter(9)) // expected result: 0 Hold - pass;

// cardCounter(10);
// cardCounter("J");
// cardCounter("Q");
// cardCounter("K");
// console.log(cardCounter("A")) // expected result: -5 Hold - pass;

// cardCounter(3);
// cardCounter(7);
// cardCounter("Q");
// cardCounter(8);
// console.log(cardCounter("A")) // expected result: -1 Hold - pass;

// cardCounter(2);
// cardCounter("J");
// cardCounter(9);
// cardCounter(2);
// console.log(cardCounter(7)) // expected result: 1 Bet - pass;

// cardCounter(2);
// cardCounter(2);
// console.log(cardCounter(10)) // expected result: 1 Bet - pass;

// cardCounter(3);
// cardCounter(2);
// cardCounter("A");
// cardCounter(10);
// console.log(cardCounter("K")) // expected result: -1 Hold - pass;