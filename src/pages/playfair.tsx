// pages/index.js
import { useState } from 'react';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const PlayfairCipher = () => {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const generateMatrix = (key: string) => {
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    const matrix = [];
    let keySet = new Set();
    key = key.toUpperCase().replace(/J/g, 'I');

    // Fill key in the matrix
    for (let char of key) {
      if (!keySet.has(char)) {
        matrix.push(char);
        keySet.add(char);
      }
    }

    // Fill the rest of the matrix with remaining alphabet
    for (let char of alphabet) {
      if (!keySet.has(char)) {
        matrix.push(char);
        keySet.add(char);
      }
    }
    console.log(matrix);

    return matrix;
  };

  const prepareText = (text: string) => {
    // Remove non-alphabetic characters and convert to uppercase
   
    if(text.length%2==1){text=text+"x"}
    console.log(text);
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
  };
  const findPosition = (matrix: string | any[], char: string) => {
    const index = matrix.indexOf(char);
    const row = Math.floor(index / 5);
    const col = index % 5;
    return [row, col];
  };


  const encrypt = () => {
    const matrix = generateMatrix(key);
    const preparedText = prepareText(text);
    let result = '';
try {
    
    for (let i = 0; i < preparedText.length; i += 2) {
        const pair = preparedText.slice(i, i + 2);
        const [row1, col1] = findPosition(matrix, pair[0]);
        const [row2, col2] = findPosition(matrix, pair[1]);
  
        if (row1 === row2) {
          // Same row
          result += matrix[row1 * 5 + (col1 + 1) % 5];
          result += matrix[row2 * 5 + (col2 + 1) % 5];
        } else if (col1 === col2) {
          // Same column
          result += matrix[((row1 + 1) % 5) * 5 + col1];
          result += matrix[((row2 + 1) % 5) * 5 + col2];
        } else {
          // Different row and column
          result += matrix[row1 * 5 + col2];
          result += matrix[row2 * 5 + col1];
        }
      }
    
} catch (error) {
    console.log(error);
    
}

    setCipherText(result);
  };

 
 
  return (
    <div>
        <label>
        Enter Text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter Key:
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <br />
      <label>
        Cipher Text:
        <input type="text" readOnly value={cipherText} />
      </label>
     
   <div className=' w-auto mr-5'>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`
const PlayfairCipher = () => {
  const [key, setKey] = useState('');
  const [text, setText] = useState('');
  const [cipherText, setCipherText] = useState('');

  const generateMatrix = (key) => {
    // ... matrix generation logic ...
  };

  const prepareText = (text) => {
    // ... text preparation logic ...
  };

  const findPosition = (matrix, char) => {
    // ... findPosition logic ...
  };

  const encrypt = () => {
    // ... encryption logic ...
  };
  
  return (
    <div>
      {/* ... JSX for input fields, button, and cipher text ... */}
    </div>
  );
};

export default PlayfairCipher;
`}
      </SyntaxHighlighter>
      </div>

    </div>
  );
};

export default PlayfairCipher;
