import React from "react";
import styled from "@emotion/styled";

type ButtonProps = {
  children: React.ReactNode;
};

const StyledButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 5px;
`;

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
