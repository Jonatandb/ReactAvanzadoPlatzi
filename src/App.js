import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router } from "@reach/router";

import Logo from "./components/Logo";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

import { NavBar } from "./components/NavBar";

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
      <NavBar />
    </>
  );
}
