# 🧮 React Calculator - Powerful & Simple 💡

This project is a smart, powerful calculator application built using React.js, styled-components, and the mathjs library.

🔗 Try it out live [here](https://igorfurman.github.io/CalculatorReact/)

## 🌟 Features

- Basic arithmetic operations including addition, subtraction, multiplication, and division.
- Supports more complex mathematical operations such as percentage and square operation (^).
- Clear all input using the clear button (C).
- Clean and intuitive UI which includes an input display and an interactive grid of buttons.

## 🚀 How it Works

The application manages all inputs through local state and react hooks. The state is updated when you press a button on the calculator. The evaluate function from the mathjs library is used to calculate the result when you press the equals button (=).

The styling of the calculator is handled through styled-components to create a clean and responsive layout. It includes the grid of buttons as well as individual styles for number, operation, and clear buttons. These styles also include hover effects for a better user experience.

## 📂 Project Structure 

The main application logic resides in `App.js`. It handles all the calculator operations and also renders the main components. The styled-components are in a separate file and imported into `App.js`.

This application consists of several reusable components:

- **NumberButton**: Displays a button with a number and triggers the `handleButtonClick` function when clicked.
- **OperationButton**: Displays a button with an operation symbol and triggers the `handleButtonClick` function when clicked.
- **ClearButton**: Displays a button for clearing all inputs and triggers the `handleClear` function when clicked.

## 🚀 Setup

If you want to try out the project locally, follow these steps:


**Clone the repository**
```bash
git clone https://github.com/IgorFurman/CalculatorReact.git
```
**Navigate to the project directory**
```bash
cd <project-directory>
```
**Install dependencies**
```bash
npm install
```
**Run the project**
```bash
npm start
```
