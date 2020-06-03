import React from "react";
import ListOfCategories from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}
