import React from "react";
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ totalPackedItems, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalPackedItems={totalPackedItems}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
