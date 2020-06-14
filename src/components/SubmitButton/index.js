import React from "react";
import { Button, ButtonWrapper } from "./styles";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </ButtonWrapper>
  );
};
