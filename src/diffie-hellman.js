const forge = require('node-forge');

function generateDHKeyPair() {
  const dh = forge.pki.rsa.generateKeyPair({
    bits: 2048,
    e: 0x10001,
  });
  return {
    privateKey: dh.privateKey,
    publicKey: dh.publicKey,
  };
}

function generateDHSecret(privateKey, publicKey) {
  const pki = forge.pki;
  const sharedSecret = pki.ellipticCurve.deriveSharedSecret({
    privateKey,
    publicKey,
  });
  return sharedSecret.getBytes();
}

module.exports = {
  generateDHKeyPair,
  generateDHSecret,
};
