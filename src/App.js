import React from "react";
import ListOfCategories from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Petgram - Jonatandb</h1>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
}
