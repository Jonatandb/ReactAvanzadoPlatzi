import React, { useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(`like_${id}`, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
