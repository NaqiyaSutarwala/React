import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onDeleteData }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            ></Item>
          );
        })}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input"> Sort by the input order</option>
          <option value="description"> Sort by description </option>
          <option value="packed">Sort by the packed status</option>
        </select>
        <button onClick={onDeleteData}> Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
