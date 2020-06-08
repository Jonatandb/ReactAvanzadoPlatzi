import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router } from "@reach/router";

import Logo from "./components/Logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";

import { NavBar } from "./components/NavBar";

import Context from "../Context";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth, activateAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs" />
              <NotRegisterUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </>
  );
}
