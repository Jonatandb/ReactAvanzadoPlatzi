import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      setStoreValue(error);
    }
  };

  return [storeValue, setLocalStorage];
};

export default useLocalStorage;
