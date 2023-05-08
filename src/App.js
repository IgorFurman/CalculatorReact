import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import {
	NumberButton,
	OperationButton,
	ClearButton,
} from './components/Buttons';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(27, 2, 7, 1) 100%
    );
  }
`;

const AppContainer = styled.div`
	font-family: Roboto, Arial, sans-serif;
	background: none;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	min-width: 300px;
	min-height: 340px;
	margin: 20px auto;
	padding: 30px;
	border-radius: 19px;

	h1 {
		color: #fff;
		text-align: center;
	}
`;

const ExpressionDisplay = styled.div`
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	box-sizing: border-box;
	font-size: 24px;
	text-align: right;
	background-color: #f1f1f1;
	color: #000000;
	border: none;
	outline: none;
	border-radius: 4px;
`;

const ButtonGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 8px;
	margin-top: 16px;
`;

const Button = styled.button`
	font-size: 18px;
	border: none;
	outline: none;
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
`;

const NumberButtonStyled = styled(Button)`
	background-color: #f1f1f1;
	color: #000000;
`;

const OperationButtonStyled = styled(Button)`
	background-color: #ffa500;
	color: #fff;
`;

const ClearButtonStyled = styled(Button)`
	background-color: #f44336;
	color: #fff;
`;

function App() {
	const [inputValue, setInputValue] = useState('');

	const handleCalculate = () => {
    try {
      const newResult = evaluate(inputValue.replace("^", "**"));
      setInputValue(newResult);
    } catch (error) {
      setInputValue("Wpisz poprawne działanie");
    }
  };

	const handleClear = () => {
		setInputValue('');
	};

  const handleButtonClick = (value) => {
    if (inputValue === 'Wpisz poprawne działanie') {
      setInputValue('');
    }
    if (value === '^') {
      try {
        const newResult = evaluate((inputValue ** 2).toString());
        setInputValue(newResult);
      } catch (error) {
        setInputValue('Wpisz poprawne działanie');
      }
    } else {
      setInputValue((prevInputValue) => prevInputValue + value);
    }
  };


	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<h1>Calculator</h1>
				<ExpressionDisplay>{inputValue || '0'}</ExpressionDisplay>
				<ButtonGrid>
					<ClearButtonStyled onClick={handleClear} aria-label='Clear'>
						C
					</ClearButtonStyled>
					{['%', '^'].map((operation, index) => (
						<OperationButtonStyled
							key={operation}
							label={operation}
							onClick={() => handleButtonClick(operation)}
							style={{ gridColumn: index + 2, gridRow: 1 }}
						>
							{operation}
						</OperationButtonStyled>
					))}
					<OperationButtonStyled
						label='/'
						onClick={() => handleButtonClick('/')}
						style={{ gridColumn: 4, gridRow: 1 }}
					>
						/
					</OperationButtonStyled>
					{['7', '8', '9'].map((number, index) => (
						<NumberButtonStyled
							key={number}
							label={number}
							onClick={() => handleButtonClick(number)}
							style={{ gridColumn: index + 1, gridRow: 2 }}
						>
							{number}
						</NumberButtonStyled>
					))}
					<OperationButtonStyled
						label=''
						onClick={() => handleButtonClick('*')}
						style={{ gridColumn: 4, gridRow: 2 }}
					>
						*
					</OperationButtonStyled>
					{['4', '5', '6'].map((number, index) => (
						<NumberButtonStyled
							key={number}
							label={number}
							onClick={() => handleButtonClick(number)}
							style={{ gridColumn: index + 1, gridRow: 3 }}
						>
							{number}
						</NumberButtonStyled>
					))}
					<OperationButtonStyled
						label='-'
						onClick={() => handleButtonClick('-')}
						style={{ gridColumn: 4, gridRow: 3 }}
					>
						-
					</OperationButtonStyled>
					{['1', '2', '3'].map((number, index) => (
						<NumberButtonStyled
							key={number}
							label={number}
							onClick={() => handleButtonClick(number)}
							style={{ gridColumn: index + 1, gridRow: 4 }}
						>
							{number}
						</NumberButtonStyled>
					))}
					<OperationButtonStyled
						label='+'
						onClick={() => handleButtonClick('+')}
						style={{ gridColumn: 4, gridRow: 4 }}
					>
						+
					</OperationButtonStyled>
					<NumberButtonStyled
						label='.'
						onClick={() => handleButtonClick('.')}
						style={{ gridColumn: 2, gridRow: 5 }}
					>
						.
					</NumberButtonStyled>
					<NumberButtonStyled
						label='0'
						onClick={() => handleButtonClick('0')}
						style={{ gridColumn: 1, gridRow: 5 }}
					>
						0
					</NumberButtonStyled>
					<OperationButtonStyled
						label='='
						onClick={handleCalculate}
						style={{ gridColumn: '3/ span 2', gridRow: 5 }}
					>
						=
					</OperationButtonStyled>
				</ButtonGrid>
			</AppContainer>
		</>
	);
}

export default App;
