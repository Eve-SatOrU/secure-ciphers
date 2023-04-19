function encryptVigenere(plaintext, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let ciphertext = '';
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (alphabet.includes(char.toLowerCase())) {
        const keyChar = key[j % key.length];
        const keyIndex = alphabet.indexOf(keyChar.toLowerCase());
        const index = alphabet.indexOf(char.toLowerCase());
        const shiftedIndex = (index + keyIndex) % alphabet.length;
        const shiftedChar = alphabet[shiftedIndex];
        ciphertext += (char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase());
        j++;
      } else {
        ciphertext += char;
      }
    }
    return ciphertext;
  }
  
  function decryptVigenere(ciphertext, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let plaintext = '';
    for (let i = 0, j = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      if (alphabet.includes(char.toLowerCase())) {
        const keyChar = key[j % key.length];
        const keyIndex = alphabet.indexOf(keyChar.toLowerCase());
        const index = alphabet.indexOf(char.toLowerCase());
        const shiftedIndex = (index - keyIndex + alphabet.length) % alphabet.length;
        const shiftedChar = alphabet[shiftedIndex];
        plaintext += (char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase());
        j++;
      } else {
        plaintext += char;
      }
    }
    return plaintext;
  }
  
  module.exports = {
    encryptVigenere,
    decryptVigenere,
  };
  