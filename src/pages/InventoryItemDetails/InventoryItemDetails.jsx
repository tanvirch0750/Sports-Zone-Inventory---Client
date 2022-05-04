import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const [inventory, setInventory] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setLoadData(true);
    fetch(`https://sheltered-dusk-40415.herokuapp.com/inventory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setQuantity(quantity);
        setLoadData(false);
      });
  }, [quantity]);

  const handleDelevered = () => {
    setDisabled(true);
    if (inventory.quantity > 0) {
      fetch(
        `https://sheltered-dusk-40415.herokuapp.com/inventory/delivered/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQuantity(quantity + 1);
          alert("user updated successfully");
          setDisabled(false);
        });
    } else {
      alert("There is nothing available in the stock. Please stock in");
      setDisabled(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

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
        <div className="inventory-item-operations">
          <div className="stock-out">
            <p>Stock Out:</p>
            <button
              disabled={disabled}
              onClick={handleDelevered}
              className="btn"
            >
              Delivered
            </button>
          </div>
          <div className="stock-in">
            <p>Stock In:</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  {...register("number", {
                    required: "Please provide stock value",
                  })}
                  type="number"
                  placeholder="Enter stock number"
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <input type="submit" className="btn" value="Restore" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
