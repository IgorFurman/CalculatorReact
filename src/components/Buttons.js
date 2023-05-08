import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 12px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
`;

export const NumberButtonStyled = styled(Button)`
  background-color: #f1f1f1;
  color: #333333;
  border: 2px solid #e0e0e0;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const OperationButtonStyled = styled(Button)`
  background-color: #2da541;
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #239536;
  }
`;

export const ClearButtonStyled = styled(Button)`
  background-color: #d91e18;
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c81712;
  }
`;

