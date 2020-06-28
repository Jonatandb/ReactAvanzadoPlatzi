import React from "react";
import { Button, ButtonWrapper } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </ButtonWrapper>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
