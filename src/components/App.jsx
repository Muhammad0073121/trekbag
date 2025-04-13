import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

function App() {
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
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalPackedItems={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItems={handleAddItems}
          handleItemsToInitial={handleItemsToInitial}
          handleRemoveAllItems={handleRemoveAllItems}
          handleAllItemsAsComplete={handleAllItemsAsComplete}
          handleAllItemsAsIncomplete={handleAllItemsAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
