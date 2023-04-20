# secure-ciphers
secure ciphers is a collection of encryption algorithms implemented in JavaScript. It includes the following algorithms:

*Caesar cipher
*Vigenère cipher
*Diffie-Hellman key exchange
*RSA encryption
# Installation
You can install secure ciphers using npm:
```
npm install secure-ciphers
```
# Usage
Here's an example of how to use the Caesar cipher:
```javascript
const { encryptCaesar, decryptCaesar } = require('secure-ciphers/caesar');
const message = 'Hello, world!';
const key = 3;
const encrypted = encryptCaesar(message, key);
console.log(encrypted); // 'Khoor, zruog!'
const decrypted = decryptCaesar(encrypted, key);
console.log(decrypted); // 'Hello, world!'
```
You can use the other encryption algorithms in the same way. See the documentation for each algorithm for more information on how to use it.

# Contributing
If you find a bug or have a feature request, please open an issue on the GitHub repository. Pull requests are welcome!

# License
Code Lock is released under the MIT License.
# Contact Name 
Eve-SatOrU

# Project Link: 
https://github.com/Eve-SatOrU/secure-ciphers
https://www.npmjs.com/package/secure-ciphers



