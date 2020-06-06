import React from "react";
import PhotoCard from "../components/PhotoCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <h5>Cargando foto... 📷</h5>;
  if (error) return <h5>Se produjo un error 😢</h5>;
  return <PhotoCard {...data.photo} />;
};

const PhotoCardWithQuery = ({ id }) => {
  console.log("id:", id);
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
};

export default PhotoCardWithQuery;
