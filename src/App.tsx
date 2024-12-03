import React, { useState, useEffect, useRef } from 'react';
import Banner from './Banner';
import './Banner.css';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputLines, setOutputLines] = useState<Array<string | React.ReactNode>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setOutputLines([...outputLines, inputValue]);
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  const handleCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case 'help':
        setOutputLines([...outputLines, ...cmds]);
        break;
      default:
        setOutputLines([...outputLines, `command not found: ${command}`]);
        break;
      case 'about':
        setOutputLines([...outputLines, 'I am a Frontend Developer with a passion for programming and problem solving.']);
        break;
      case 'clear':
        setOutputLines([]);
        break;
      case 'projects':
        setOutputLines([...outputLines, '1. Project 1', '2. Project 2', '3. Project 3']);
        break;
      case 'skills':
        setOutputLines([...outputLines, '1. JavaScript', '2. React', '3. TypeScript']);
        break;
      case 'contact':
        setOutputLines([
          ...outputLines, 
          'Email:joshcrothers1@gmail.com', 
          'Phone:(984-204-3521)', 
          <a href="https://www.linkedin.com/in/joshua-crothers-3592ba1b5/" target="_blank">LinkedIn</a>]);
    }
  };

  const cmds = [
    "help - list all available commands",
    "clear - clear the screen",
    "projects - list all projects",
    "skills - list all skills",
    "contact - list contact information",
    "about - information about me"
  ];

  return (
    <>
      <Banner />
      <div className="terminal">
        <div className="output">
          <p>
            <span id="visitor">visitor</span>@crothers-terminal: 
            <input 
              type="text" 
              value={inputValue} 
              onChange={handleInputChange}
              onKeyDown={handleEnter}
              className="userInput"
              ref={inputRef}
            />
          </p>
          {outputLines.map((line, index) => (
            <p key={index}> {line}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;