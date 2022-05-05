import React from "react";
import {
  IoBarChartOutline,
  IoCubeOutline,
  IoEnterOutline,
  IoHomeOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import "./InventoryItem.css";

const InventoryItem = ({ item }) => {
  const {
    _id,
    name,
    image,
    price,
    quantity,
    description,
    outlet,
    warehouse,
    supplier,
    email,
  } = item;
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleManageInventory = () => {
    navigate(`/inventory/${_id}`);
  };

  return (
    <div className="inventory-item">
      <div
        className="inventory-img"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="inventory-desc">{description}</p>
      </div>

      <div className="inventory-content">
        <h3>{name}</h3>
        <div className="inventory-store-name">
          <IoHomeOutline className="inventory-icon" />
          <span>Outlet: {outlet}</span>
        </div>
        <div className="inventory-warehouse-name">
          <IoCubeOutline className="inventory-icon" />
          <span>Warehouse: {warehouse}</span>
        </div>
        <div className="inventory-supplier-name">
          <IoEnterOutline className="inventory-icon" />
          <span>Supplier: {supplier}</span>
        </div>
        <div className="inventory-quantity">
          <IoBarChartOutline className="inventory-icon" />
          <span>Quantity: {quantity}</span>
        </div>
        <div className="inventory-price">
          <IoPricetagOutline className="inventory-icon" />
          <span>Price: ${price}</span>
        </div>
        {pathname === "/my-items" ? (
          <div className="inventory-buttons">
            {" "}
            <button className="btn btn-sm">Update</button>{" "}
            <button className="btn btn-sm">Delete</button>
          </div>
        ) : (
          <button className="btn btn-sm" onClick={handleManageInventory}>
            Manage Inventory
          </button>
        )}
      </div>
    </div>
  );
};

export default InventoryItem;
