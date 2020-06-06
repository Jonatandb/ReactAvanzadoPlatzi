import React from "react";
import { Anchor, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);

export default Category;
