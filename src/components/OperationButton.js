import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const OperationButton = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
};
