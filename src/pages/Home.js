import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import ListOfPhotoCards from "../containers/ListOfPhotoCards";
import { Div } from "../components/Layout/styles";
import { Helmet } from "react-helmet";

export const HomePage = ({ categoryId }) => {
  const title = "Tu app de fotos de mascotas";
  const subtitle =
    "Con Petgram puedes encontrar fotos de animales domésticos muy bonitos";

  return (
    <>
      <Helmet>
        <title>{title && title} | Petgram 🐶</title>
        <meta name="description" content={subtitle} />
      </Helmet>
      <ListOfCategories />
      <Div>
        <ListOfPhotoCards categoryId={categoryId} />
      </Div>
    </>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
