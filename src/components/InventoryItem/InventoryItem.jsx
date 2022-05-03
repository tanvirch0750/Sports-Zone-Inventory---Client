import React from "react";
import {
  IoBarChartOutline,
  IoCubeOutline,
  IoEnterOutline,
  IoHomeOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import "./InventoryItem.css";

const InventoryItem = () => {
  return (
    <div className="inventory-item">
      <div className="inventory-img">
        <p className="inventory-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure tempora
          facilis.
        </p>
      </div>

      <div className="inventory-content">
        <h3>Badminton</h3>
        <div className="inventory-store-name">
          <IoHomeOutline className="inventory-icon" />
          <span>Store: Store name</span>
        </div>
        <div className="inventory-warehouse-name">
          <IoCubeOutline className="inventory-icon" />
          <span>Warehouse: Warehouse name</span>
        </div>
        <div className="inventory-supplier-name">
          <IoEnterOutline className="inventory-icon" />
          <span>Supplier: Addidas</span>
        </div>
        <div className="inventory-quantity">
          <IoBarChartOutline className="inventory-icon" />
          <span>Quantity: 50</span>
        </div>
        <div className="inventory-price">
          <IoPricetagOutline className="inventory-icon" />
          <span>Price: $350</span>
        </div>
        <button className="btn btn-sm">Update</button>
      </div>
    </div>
  );
};

export default InventoryItem;
