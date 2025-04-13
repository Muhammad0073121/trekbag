import React from "react";
import Logo from "./Logo";
import Counter from "./Counter";
import { useItemStore } from "../stores/itemStore";

export default function Header() {
  const items = useItemStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalPackedItems={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
