import React, { useState } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import useNearScreen from "../../hooks/useNearScreen";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../containers/ToggleLikeMutation";
import { Link } from "@reach/router";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(`like_${id}`, false);

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                setLiked(!liked);
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
