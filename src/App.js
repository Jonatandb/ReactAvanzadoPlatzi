import React, { useContext, Suspense, lazy } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Router, Redirect } from "@reach/router";

import Logo from "./components/Logo";

import { NavBar } from "./components/NavBar";

import { Context } from "../Context";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));
const Detail = React.lazy(() => import("./pages/Detail"));
const NotRegisterUser = React.lazy(() => import("./pages/NotRegisterUser"));
const Favs = React.lazy(() => import("./pages/Favs"));
const User = React.lazy(() => import("./pages/User"));

export default function App() {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
}
