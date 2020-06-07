import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import Logo from "./components/Logo";
import PhotoCardWithQuery from "./containers/PhotoCardWithQuery";

import { Home } from "./pages/Home";

import { Router } from "@reach/router";

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailID = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailID ? (
        <>
          <PhotoCardWithQuery id={detailID} />
        </>
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:categoryId" />
        </Router>
      )}
    </>
  );
}
