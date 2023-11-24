import React, { useState } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CaesarCipher = () => {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');

  const encryptText = () => {
    let result = '';

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char.match(/[a-zA-Z]/)) {
        const charCode = text.charCodeAt(i);

        // Determine if the character is uppercase or lowercase
        const isUpperCase = charCode >= 65 && charCode <= 90;
        const isLowerCase = charCode >= 97 && charCode <= 122;

        // Apply the shift to the character code
        let shiftedCharCode = charCode + shift;

        // Wrap around the alphabet
        if (isUpperCase) {
          shiftedCharCode = ((shiftedCharCode - 65 + 26) % 26) + 65;
        } else if (isLowerCase) {
          shiftedCharCode = ((shiftedCharCode - 97 + 26) % 26) + 97;
        }

        // Convert the character code back to a character and append to the result
        result += String.fromCharCode(shiftedCharCode);
      } else {
        // If the character is not a letter, leave it unchanged
        result += char;
      }
    }

    setEncryptedText(result);
  };

  return (
    <div>
      <h2>Caesar Cipher Encryption</h2>
      <br />
        <label>Enter Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      <br />
      <label>Enter Shift:</label>
        <input
          type="number"
          value={shift}
          onChange={(e) => setShift(parseInt(e.target.value))}
        />
      
      <button onClick={encryptText}>Encrypt</button>
      <label>
        Encrypted Text:
        <textarea value={encryptedText} readOnly />
      </label>
      <div className=' w-auto mr-5'>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`const [text, setText] = useState('');
const [shift, setShift] = useState(0);
const [encryptedText, setEncryptedText] = useState('');

const encryptText = () => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-zA-Z]/)) {
      const charCode = text.charCodeAt(i);

      // Determine if the character is uppercase or lowercase
      const isUpperCase = charCode >= 65 && charCode <= 90;
      const isLowerCase = charCode >= 97 && charCode <= 122;

      // Apply the shift to the character code
      let shiftedCharCode = charCode + shift;

      // Wrap around the alphabet
      if (isUpperCase) {
        shiftedCharCode = ((shiftedCharCode - 65 + 26) % 26) + 65;
      } else if (isLowerCase) {
        shiftedCharCode = ((shiftedCharCode - 97 + 26) % 26) + 97;
      }

      // Convert the character code back to a character and append to the result
      result += String.fromCharCode(shiftedCharCode);
    } else {
      // If the character is not a letter, leave it unchanged
      result += char;
    }
  }

  setEncryptedText(result);
};`}
        </SyntaxHighlighter></div>
    
    </div>
  );
};

export default CaesarCipher;
