import React, { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router, Redirect } from "@reach/router";

import Logo from "./components/Logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { NotRegisterUser } from "./pages/NotRegisterUser";

import { NavBar } from "./components/NavBar";

import { Context } from "../Context";

export default function App() {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  );
}
