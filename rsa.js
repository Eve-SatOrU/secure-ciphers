const forge = require('node-forge');

function generateRSAKeyPair() {
  const rsa = forge.pki.rsa.generateKeyPair({
    bits: 2048,
    e: 0x10001,
  });
  return {
    privateKey: rsa.privateKey,
    publicKey: rsa.publicKey,
  };
}

function encryptRSA(plaintext, publicKey) {
  const pki = forge.pki;
  const encrypted = pki.publicKeyFromPem(publicKey)
    .encrypt(Buffer.from(plaintext), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha256.create(),
      },
    });
  return encrypted.toString('base64');
}

function decryptRSA(ciphertext, privateKey) {
  const pki = forge.pki;
  const decrypted = pki.privateKeyFromPem(privateKey)
    .decrypt(Buffer.from(ciphertext, 'base64'), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: {
        md: forge.md.sha256.create(),
      },
    });
  return decrypted.toString();
}
// The decrypted data is returned as a UTF-8 string.


module.exports = {
  generateRSAKeyPair,
  encryptRSA,
  decryptRSA,
};
