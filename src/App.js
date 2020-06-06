import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import Logo from "./components/Logo";
import ListOfCategories from "./components/ListOfCategories";
import ListOfPhotoCards from "./containers/ListOfPhotoCards";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={3} />
    </>
  );
}
