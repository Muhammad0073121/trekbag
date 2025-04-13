import React from "react";
import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return items.length === 0 ? (
    <EmptyView />
  ) : (
    <ul className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
