let email = "fakeEmail@domain.com";

function maskEmail(email) {
// separate address and domain parts
  let origAddress = email.slice(0, email.indexOf("@"));
  let domain = email.slice(email.indexOf("@"), email.length);

// mask the address part
  let maskedAddress = origAddress[0] + "*".repeat(origAddress.length - 2) + origAddress[origAddress.length - 1];

// concatenate the masked address and domain, and return
  let maskedEmail = maskedAddress + domain;

  return maskedEmail;
};

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail(email));