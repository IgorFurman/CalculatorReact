import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import { NumberButton } from './components/NumberButton';
import { OperationButton } from './components/OperationButton';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 30px auto;
  text-align: center;
`;

const ExpressionInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  margin-top: 16px;
`;
const CalculateButton = styled(OperationButton)`
  grid-column: 1 /  2;
`;

const ClearButton = styled(OperationButton)`
  grid-column: 3 /  2;
`;

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCalculate = () => {
    try {
      const newResult = evaluate(inputValue);
      setInputValue(newResult);
    } catch (error) {
      setInputValue("Błąd");
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  return (
    <AppContainer>
      <h1>Kalkulator</h1>
      <ExpressionInput
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Wprowadź wyrażenie'
      />
      <ButtonGrid>
        {['7', '8', '9', '4', '5', '6', '3', '2', '1', '0'].map((number) => (
          <NumberButton
            key={number}
            label={number}
            onClick={() => handleButtonClick(number)}
          />
        ))}
        {['+', '-', '*', '/'].map((operation) => (
          <OperationButton
            key={operation}
            label={operation}
            onClick={() => handleButtonClick(operation)}
          />
        ))}
      </ButtonGrid>
      <CalculateButton onClick={handleCalculate} label="Oblicz" />
      <ClearButton onClick={handleClear} label="Wyczyść" />
    </AppContainer>
  );
}

export default App;
