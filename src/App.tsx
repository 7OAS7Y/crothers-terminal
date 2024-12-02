import React, { useState } from 'react';
import Banner from './banner';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setOutputValue(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <Banner />
      <div className="terminal">
        <div className="output">
          <p>Welcome to my terminal portfolio!</p>
          <p>visitor@crothers-terminal: <input type="text" value={inputValue} onChange={handleInputChange} className="userInput" placeholder=""/></p>
          <div onChange={handleEnter} className="termOutput">{outputValue}</div>
        </div>
      </div>
    </>
  );
};

export default App;