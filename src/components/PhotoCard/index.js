import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const storageKey = `like_${id}`;

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(storageKey);
      return like;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver === "undefined"
        ? import("intersection-observer")
        : window.IntersectionObserver
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    });
  }, [ref]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(storageKey, value);
      setLiked(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
