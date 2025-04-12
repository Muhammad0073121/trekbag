import React from "react";
import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleItemsToInitial,
  handleAllItemsAsIncomplete,
  handleAllItemsAsComplete,
}) {
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
