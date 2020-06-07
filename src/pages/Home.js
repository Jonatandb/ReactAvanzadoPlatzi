import React from "react";
import ListOfCategories from "../components/ListOfCategories";
import ListOfPhotoCards from "../containers/ListOfPhotoCards";

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};
