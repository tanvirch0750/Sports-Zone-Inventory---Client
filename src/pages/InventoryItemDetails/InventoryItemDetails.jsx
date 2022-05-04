import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const [inventory, setInventory] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);
  console.log(user);
  const { id } = useParams();

  useEffect(() => {
    setLoadData(true);
    fetch(`https://sheltered-dusk-40415.herokuapp.com/inventory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoadData(false);
      });
  }, []);

  console.log(user.photoURL);

  return (
    <section className="inventory-item-details">
      <div className="inventory-item-details container">
        <div className="items-owner-details">
          <div className="owner-deatils-content">
            <h4>
              Name:{" "}
              {`${
                user.displayName
                  ? user.displayName
                  : "Please Update your profile"
              }`}
            </h4>
            <h4>Email: {user.email}</h4>
            <h4>Outlet: {inventory.storeName}</h4>
            <h4>Warehouse: {inventory.warehouse}</h4>
          </div>
          <div className="owner-details-img">
            <div className="owner-detail-img-box">
              <img src={user.photoURL} alt="user" />
            </div>
            <button className="btn">Update Profile</button>
          </div>
        </div>
        <div className="heading">
          <h2>Invnetory Item Details</h2>
        </div>
        <div className="item-details">
          <div className="item-details-img-box">
            <img src={inventory.image} alt="invntory img" />
          </div>
          <div className="item-details-content">
            <h3>{inventory.name}</h3>
            <p>{inventory.description}.</p>
            <div>
              <span>Supplier: {inventory.supplier}</span>
              <span>Quantity: {inventory.quantity}</span>
              <span>Price: ${inventory.price}</span>
              <span>Total: ${inventory.price * inventory.quantity}</span>
              <span>
                Product Status:{" "}
                <span className="stock-message">
                  {inventory.quantity > 0 ? "Available" : "Sold Out"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
