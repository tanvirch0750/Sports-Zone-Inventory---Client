import React from "react";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";
import Loading from "../Loading/Loading";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [inventory, loadData] = useInventory();

  const navigate = useNavigate();

  const handleManageInventory = () => {
    navigate(`/manage-inventory`);
  };

  if (loadData) {
    return <Loading loadData={loadData} />;
  }

  return (
    <section className="inventories">
      <div className="inventory-item-inner">
        <div className="heading">
          <h2>Inventory Items</h2>
        </div>
        <div className="inventory-items">
          {inventory.slice(0, 6).map((item) => (
            <InventoryItem key={item._id} item={item} />
          ))}
        </div>
        <div className="inventories-btn">
          <button onClick={handleManageInventory} className="btn btn-lg">
            Manage inveontories
          </button>
        </div>
      </div>
    </section>
  );
};

export default InventoryItems;
