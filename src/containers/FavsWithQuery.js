import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { ListOfFavs } from "../components/ListOfFavs";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy="network-only">
    {({ loading, error, data }) => {
      if (loading) return <h5>Cargando favoritos... 💗</h5>;
      if (error) return <p>Error!</p>;
      const { favs } = data;

      return <ListOfFavs favs={favs} />;
    }}
  </Query>
);
