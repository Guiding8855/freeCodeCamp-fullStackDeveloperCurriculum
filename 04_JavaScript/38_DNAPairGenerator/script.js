function pairElement(str) {
  let outArr = [];

  // loop through chars in the input string
  for (const char in str) {
    
    // push the char into a pair array
    let pairArr = [];
    pairArr.push(str[char]);

    // identify its base pair character, and push that in too
    let basePairChar;
    if (str[char] === "A") {
      basePairChar = "T";  
    } else if (str[char] === "T") {
      basePairChar = "A";
    } else if (str[char] === "C") {
      basePairChar = "G";
    } else if (str[char] === "G") {
      basePairChar = "C";
    };

    pairArr.push(basePairChar)

    // push the pair array into an output array to return
    outArr.push(pairArr)
  }

  return outArr;
};

// test cases
console.log(pairElement("ATCGA")); // expect: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]] - pass
console.log(pairElement("TTGAG")); // expect: [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]] - pass
console.log(pairElement("CTCTA")); // expect: [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]] - pass