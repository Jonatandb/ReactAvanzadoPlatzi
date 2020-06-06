import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";

import Logo from "./components/Logo";
import ListOfCategories from "./components/ListOfCategories";
import ListOfPhotoCards from "./containers/ListOfPhotoCards";
import PhotoCardWithQuery from "./containers/PhotoCardWithQuery";

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
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={3} />
        </>
      )}
    </>
  );
}
