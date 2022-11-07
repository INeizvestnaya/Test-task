const button = document.querySelector('#decrypt-button');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

button.addEventListener('click', () => aliceDecrypt(input.value));

const aliceDecrypt = (message) => {
  let decryptEnd = false;

  const isLetterAdded = (message, letterIndex) => {
    const cur = message[letterIndex];
    const next = message[letterIndex + 1];
    const prev = message[letterIndex - 1];

    return (cur !== prev && cur !== next) || (cur === prev && cur === next);
  };

  const decrypt = (encoded) => {
    if (decryptEnd) {
      return encoded;
    } else {
      let result = '';

      decryptEnd = true;

      for (let i = 0; i < encoded.length; i++) {
        if (isLetterAdded(encoded, i)) {
          result += encoded[i];
        } else {
          decryptEnd = false;
        }
      }

      return decrypt(result);
    }
  };

  output.value = decrypt(message);
};
