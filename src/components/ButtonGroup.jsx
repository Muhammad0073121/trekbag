import React from "react";
import Button from "./Button";
import { useItemStore } from "../stores/itemStore";

export default function ButtonGroup() {
  const handleAllItemsAsComplete = useItemStore(
    (state) => state.handleAllItemsAsComplete
  );
  const handleAllItemsAsIncomplete = useItemStore(
    (state) => state.handleAllItemsAsIncomplete
  );
  const handleItemsToInitial = useItemStore(
    (state) => state.handleItemsToInitial
  );
  const handleRemoveAllItems = useItemStore(
    (state) => state.handleRemoveAllItems
  );
  const secondaryButtons = [
    { title: "Mark all as complete", onClick: handleAllItemsAsComplete },
    { title: "Mark all as incomplete", onClick: handleAllItemsAsIncomplete },
    { title: "Reset to initial", onClick: handleItemsToInitial },
    { title: "Remove all items", onClick: handleRemoveAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((btn) => {
        return (
          <Button key={btn.title} type="secondary" onClick={btn.onClick}>
            {btn.title}
          </Button>
        );
      })}
    </section>
  );
}
