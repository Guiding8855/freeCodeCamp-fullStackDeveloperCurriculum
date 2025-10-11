function generatePassword(length) {
  let passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const maxIndex = passwordChars.length - 1;
  let passwordArray = [];

  // loop from i to desired password length
  for (let i = 1; i <= length; i++) {
    // pick a random index of passwordChars
    const randomIndex = Math.round(Math.random() * maxIndex);
    let randomChar = passwordChars[randomIndex];

    // push that into the new password array
    passwordArray.push(randomChar);
  };

  // join the password array into an output string to return
  return passwordArray.join("");
};

let password = generatePassword(20);
console.log(`Generated password: ${password}`);