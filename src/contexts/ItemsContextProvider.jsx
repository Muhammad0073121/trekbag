import React, { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItems = (itemName) => {
    setItems([
      ...items,
      { id: new Date().getTime(), name: itemName, packed: false },
    ]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id == id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleAllItemsAsComplete = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: true };
      })
    );
  };

  const handleAllItemsAsIncomplete = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: false };
      })
    );
  };

  const handleItemsToInitial = () => {
    setItems(initialItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <ItemContext.Provider
      value={{
        items,
        handleAddItems,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleAllItemsAsComplete,
        handleAllItemsAsIncomplete,
        handleItemsToInitial,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}
