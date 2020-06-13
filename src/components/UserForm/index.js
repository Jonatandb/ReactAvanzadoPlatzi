import React, { useState, useLayoutEffect } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({
  disabled,
  error,
  onSubmit,
  title = "UserForm has no title",
}) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          {...password}
          type="password"
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
