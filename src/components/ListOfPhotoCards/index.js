import React from "react";
import PhotoCard from "../PhotoCard";

const ListOfPhotoCardsComponent = ({
  data: { photos = [], loading = true },
} = {}) => {
  return loading ? (
    <h5>Cargando fotos... 📷</h5>
  ) : (
    <ul style={{ marginTop: "2px" }}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};

export default ListOfPhotoCardsComponent;
