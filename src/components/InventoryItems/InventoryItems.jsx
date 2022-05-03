import React from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  return (
    <section className="inventories">
      <div className="inventory-item-inner">
        <div className="heading">
          <h2>Inventory Items</h2>
        </div>
        <div className="inventory-items">
          <InventoryItem />
          <InventoryItem />
          <InventoryItem />
          <InventoryItem />
          <InventoryItem />
          <InventoryItem />
        </div>
      </div>
    </section>
  );
};

export default InventoryItems;
