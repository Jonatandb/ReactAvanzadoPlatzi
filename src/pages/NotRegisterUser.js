import React, { useContext } from "react";
import { Context } from "../../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { LoginMutation } from "../containers/LoginMutation";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              activateAuth(data.signup);
            });
          };

          const errorMsg =
            error && "El usuario ya existe o hay algún problema.";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              activateAuth(data.login);
            });
          };

          const errorMsg =
            error && "La contraseña no es correcta o el usuario no existe";

          return (
            <UserForm
              disable={loading}
              error={errorMsg}
              onSubmit={onSubmit}
              title="Iniciar Sesión"
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
