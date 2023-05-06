import React from "react";
import styled from "styled-components";


const Result = styled.h2`
  margin-top: 16px;
`;

export const Display = ({ value }) => {
  return <Result>Wynik: {value}</Result>;
};
