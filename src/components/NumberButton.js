import React from "react";
import styled from "styled-components";

 const Button = styled.button`
  background-color: #f1f1f1;
  border: none;
  color: #333;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
	display: grid;
	
  &:hover {
    background-color: #ddd;
  }
`;

export const NumberButton = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
};


