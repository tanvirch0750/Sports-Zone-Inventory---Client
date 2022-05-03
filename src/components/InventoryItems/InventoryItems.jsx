import React from "react";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [inventory] = useInventory();

  return (
    <section className="inventories">
      <div className="inventory-item-inner">
        <div className="heading">
          <h2>Inventory Items</h2>
        </div>
        <div className="inventory-items">
          {inventory.map((item) => (
            <InventoryItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryItems;
