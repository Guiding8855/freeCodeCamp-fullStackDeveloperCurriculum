let email = "fakeEmail@domain.com";

console.log(email.length)

function maskEmail(email) {
// separate address and domain parts
  let origAddress = email.slice(0, email.indexOf("@"));
  console.log(origAddress);
  let domain = email.slice(email.indexOf("@"), email.length);
  console.log(domain);

// mask the address part
let maskedAddress = origAddress[0] + "*".repeat(origAddress.length - 2) + origAddress[origAddress.length];
console.log(maskedAddress);

// concatenate the masked address and domain, and return
};

console.log(maskEmail(email));