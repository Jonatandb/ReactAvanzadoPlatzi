import React from "react";
import { PhotoCard } from "../PhotoCard";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

const ListOfPhotoCardsComponent = ({
  data: { photos = [], loading = true },
} = {}) => {
  return loading ? (
    <h3>Cargando fotos...</h3>
  ) : (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
