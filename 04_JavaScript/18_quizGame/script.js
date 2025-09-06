// US01: You should create an array named questions
const questions = [];

const question1 = {
  // US03. The category key should have the value of a string representing a question category
  category: "General Knowledge",
  // US04. The question key should have the value of a string representing a question
  question: "How many oceans are there?",
  // US05. The choices key should have the value of an array containing three strings, 
  // which are alternative answers to the question
  choices: ["Four", "Five", "Six"],
  // US06. The answer key should have the value of a string, representing the correct answer to the 
  // question. Also, the value of answer should be included in the choices array.
  answer: "Five"
};

const question2 = {
  category: "History",
  question: "What country first used paper money?",
  choices: ["China", "India", "England"],
  answer: "China"
};

const question3 = {
  category: "Science",
  question: "What is the hardest natural substance on Earth?",
  choices: ["Agate", "Titanium", "Diamond"],
  answer: "Diamond"
};

const question4 = {
  category: "Entertainment",
  question: "What was Pixar's first feature-length movie?",
  choices: ["Wall-e", "Monsters Inc.", "Toy Story"],
  answer: "Toy Story"
};

const question5 = {
  category: "Sports",
  question: "What is the signature food dish served at Wimbledon?",
  choices: ["Peaches and cream", "Strawberries and cream", "English pudding"],
  answer: "Strawberries and cream"
};

// US02. The questions array should contain at least 5 objects, each having the keys category, 
// question, choices, and answer
questions.push(question1, question2, question3, question4, question5);

// US07. You should have a function named getRandomQuestion that takes an array of questions as a 
// parameter and returns a random question object from the array
function getRandomQuestion(arr) {
  if (arr.length > 0) {
    const maxIndex = arr.length - 1;
    /* Math.random() * (max - min) + min gives a random number between two values */
    /* No need for min in this equation since minIndex = 0 */
    const randomIndex = Math.round( Math.random() * (maxIndex) );
    return arr[randomIndex];
  }
  else {
    return "No objects in array."
  }
};

// US08. You should have a function named getRandomComputerChoice that takes an array of the 
// available choices as a parameter, and returns a random answer to the selected question
function getRandomComputerChoice(arr) {
  if (arr.length > 0) {
    const maxIndex = arr.length - 1;
    const randomIndex = Math.round( Math.random() * maxIndex);
    return arr[randomIndex];
  }
  else {
    return "No objects in array."
  }
};

// US09. You should have a function named getResults that takes the question object as the first 
// parameter and the computer's choice as the second parameter. The function should return 
// "The computer's choice is correct!" if the answer is correct. Otherwise it returns "The 
// computer's choice is wrong. The correct answer is: <correct-answer>", where <correct-answer> is 
// the value of the correct answer to the question.
function getResults(question, response) {
  if (question.answer === response) {
    return `The computer's choice is correct!`;
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

// Testing
let testQuestion = getRandomQuestion(questions);
let testAnswer = getRandomComputerChoice(testQuestion.choices);

console.log(testQuestion);
console.log(testAnswer);
console.log(getResults(testQuestion, testAnswer));