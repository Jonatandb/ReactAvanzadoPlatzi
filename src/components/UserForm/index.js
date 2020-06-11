import React, { useState } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title = "Form with no title" }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" {...password} type="password" />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
