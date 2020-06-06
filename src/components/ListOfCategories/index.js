import React, { useState, useEffect } from "react";
import Category from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-api-jonatandb.now.sh/categories")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setCategories(response);
      })
      .catch((err) => {
        setLoading(false);
        console.log("useCategoriesData() -> Error:", err);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 190;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
