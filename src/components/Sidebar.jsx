import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddItems } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={handleAddItems} />
      <ButtonGroup />
    </div>
  );
}
