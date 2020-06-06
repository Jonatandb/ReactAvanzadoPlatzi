import React from "react";
import PhotoCard from "../components/PhotoCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const query = gql`
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

const PhotoCardWithQuery = ({ id }) => {
  console.log("id:", id);
  return (
    <Query query={query} variables={{ id }}>
      {({ loading, error, data }) => {
        return loading ? (
          <h5>Cargando foto... 📷</h5>
        ) : (
          <PhotoCard {...data.photo} />
        );
      }}
    </Query>
  );
};

export default PhotoCardWithQuery;
