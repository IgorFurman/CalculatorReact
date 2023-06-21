# React Calculator
This project is a simple, yet powerful calculator application built using React.js, styled-components, and the mathjs library.


# Features

- Basic arithmetic operations including addition, subtraction, multiplication, and division.Supports more complex mathematical operations such as percentage and square operation (^).
- Clear all input using the clear button (C).
- Clean and intuitive UI which includes an input display and an interactive grid of buttons.

- 
# How it Works
The application manages all inputs through the local state and react hooks. The state is updated when you press a button on the calculator. The evaluate function from the mathjs library is used to calculate the result when you press the equals button (=).

The styling of the calculator is handled through styled-components to create a clean and responsive layout. It includes the grid of buttons as well as individual styles for number, operation, and clear buttons. These styles also include hover effects for a better user experience.

# Project Structure 

The main application logic resides in App.js. It handles all the calculator operations and also renders the main components. The styled-components are in a separate file and imported into App.js.
This application consists of several reusable components:

- **NumberButton**: Displays a button with a number and triggers the handleButtonClick function when clicked.
- **OperationButton**: Displays a button with an operation symbol and triggers the handleButtonClick function when clicked.
- **ClearButton**: Displays a button for clearing all inputs and triggers the handleClear function when clicked.
  
# Setup
To run this project, install it locally using npm:

```bash
$ cd ../react-calculator
$ npm install
$ npm start
The application will start locally on port 3000.
```


