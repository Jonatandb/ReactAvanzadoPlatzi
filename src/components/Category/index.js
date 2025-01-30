import React from "react";
import { Link, Image } from "./styles";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop";

const Category = ({ cover = DEFAULT_IMAGE, path = "#", emoji = "?" }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);

export default Category;
