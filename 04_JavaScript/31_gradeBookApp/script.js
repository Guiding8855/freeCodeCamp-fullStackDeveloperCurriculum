function getAverage(scores) {
  // loop over the scores in the array and sum them all up
  let totalScore = 0;
  for (let score of scores) {
    totalScore += score;
  }

  // then divide by the array length
  let average = totalScore / scores.length;

  return average;
};

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 0) {
    return "F";
  } else {
    return "Error: score must be a number";
  }
};

function hasPassingGrade(score) {
  // if the score is equivalent to a non-"F" grade, then they have a passing grade
  return getGrade(score) != "F" ? true : false;
};

function studentMsg(scores, studentScore) {
  let resultText = hasPassingGrade(studentScore) ? "passed" : "failed";

  return "Class average: " + getAverage(scores) + ". Your grade: " + getGrade(studentScore) + ". You " + resultText + " the course."
}

// test cases
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])) // expect: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])) // expect: 85.4
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])) // expect: 92.4
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83])) // expect: 47.25
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97])) // expect: 47.125

console.log(getGrade(100)); // expect: "A+"
console.log(getGrade(96)); // expect: "A"
console.log(getGrade(85)); // expect: "B"
console.log(getGrade(72)); // expect: "C"
console.log(getGrade(69)); // expect: "D"
console.log(getGrade(54)); // expect: "F"

console.log(hasPassingGrade(90)); // expect: true
console.log(hasPassingGrade(45)); // expect: false

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)) // expect: "Class average: 71.7. Your grade: F. You failed the course."
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85)) // expect: "Class average: 48.25. Your grade: B. You passed the course."