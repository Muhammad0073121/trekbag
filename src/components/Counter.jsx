import React from "react";

export default function Counter({ totalPackedItems, totalNumberOfItems }) {
  return (
    <p>
      <b>{totalPackedItems}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
