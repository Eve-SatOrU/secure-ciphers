function encryptCaesar(plaintext, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      const index = alphabet.indexOf(char.toLowerCase());
      if (index === -1) {
        ciphertext += char;
      } else {
        const shiftedIndex = (index + shift) % alphabet.length;
        const shiftedChar = shiftedAlphabet[shiftedIndex];
        ciphertext += (char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase());
      }
    }
    return ciphertext;
  }
  
  function decryptCaesar(ciphertext, shift) {
    return encryptCaesar(ciphertext, -shift);
  }
  
  module.exports = {
    encryptCaesar,
    decryptCaesar,
  };