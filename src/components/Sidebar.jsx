import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItems,
  handleItemsToInitial,
  handleRemoveAllItems,
  handleAllItemsAsIncomplete,
  handleAllItemsAsComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItems={handleAddItems} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleItemsToInitial={handleItemsToInitial}
        handleAllItemsAsIncomplete={handleAllItemsAsIncomplete}
        handleAllItemsAsComplete={handleAllItemsAsComplete}
      />
    </div>
  );
}
