import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map((cat) => (
        <Item key={cat}>
          <Category path={cat} />
        </Item>
      ))}
    </List>
  );
};

export default ListOfCategories;
