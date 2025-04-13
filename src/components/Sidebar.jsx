import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemStore } from "../stores/itemStore";

export default function Sidebar() {
  const handleAddItems = useItemStore((state) => state.handleAddItems);
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={handleAddItems} />
      <ButtonGroup />
    </div>
  );
}
