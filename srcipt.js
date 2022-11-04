const button = document.querySelector('#decrypt-button');
const input = document.querySelector('#input');
const output = document.querySelector('#output');

button.addEventListener('click', () => aliceDecrypt(input.value));

const aliceDecrypt = (message) => {
  let noRepeat = false;

  const decrypt = (encoded) => {
    if (noRepeat) {
      return encoded;
    } else {
      let result = '';

      noRepeat = true;

      for (let i = 0; i < encoded.length; i++) {
        const curLetter = encoded[i];

        if (curLetter !== encoded[i - 1] && curLetter !== encoded[i + 1]) {
          result += curLetter;
        } else {
          noRepeat = false;
        }
      }

      return decrypt(result);
    }
  };

  output.value = decrypt(message);
};
