function keygen() {
  /* Generate a random key between 1 to 26, both inclusive */
  return Math.floor(Math.random() * 26) + 1;
}

function encrypt(plaintext, key) {
  /* Encrypt the plaintext */
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let ciphertext = "";

  for (let ptChar of plaintext) {
    let ptCharIndex = alphabets.indexOf(ptChar);
    let ctCharIndex = ptCharIndex + key;
    if (ctCharIndex > 25) {
      ctCharIndex = ctCharIndex - 26;
    }
    ciphertext = ciphertext + alphabets[ctCharIndex];
  }

  return ciphertext;
}

function decrypt(ciphertext, key) {
  /* Decrypt the ciphertext */
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let plaintext = "";

  /* -- Put your code below -- */

  /* -- -- */

  return plaintext;
}

const plaintext = "checkflank";

var key = keygen();
var ciphertext = encrypt(plaintext, key);

console.log("encrypt() =", ciphertext);
console.log("decrypt() =", decrypt(ciphertext, key));
