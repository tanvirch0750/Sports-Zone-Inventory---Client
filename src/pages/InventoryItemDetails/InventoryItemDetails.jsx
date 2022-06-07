import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";
import Loading from "../../components/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import "./InventoryItemDetails.css";

const InventoryItemDetails = () => {
  const [inventory, setInventory] = useState([]);
  const [quantity, setQuantity] = useState(0); // this state for rerender ui after update quantity
  const [disabled, setDisabled] = useState(false); // this is for disabled btn
  const [loadData, setLoadData] = useState(false); // for loading component
  const [open, setOpen] = useState(false); // for confirmation box
  const [deliveredMessage, setDeliveredMessage] = useState(false); // for confirmation box message
  const [user] = useAuthState(auth);

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const navigate = useNavigate();

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
    setLoadData(true);
    if (inventory.quantity >= 1) {
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
          setLoadData(false);
          setDeliveredMessage(false);
          setQuantity(quantity + 1);
          setOpen(true);
          setDisabled(false);
        });
    }

    if (inventory.quantity <= 0) {
      setOpen(true);
      setDisabled(true);
    }
  };

  const onSubmit = (data) => {
    setLoadData(true);
    fetch(`https://sheltered-dusk-40415.herokuapp.com/inventory/stored/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadData(false);
        setDeliveredMessage(true);
        setOpen(true);
        setQuantity(quantity + 1);
        setDisabled(false);
      });
    reset();
  };

  const handleManageInventory = () => {
    navigate(`/manage-inventory`);
  };

  const handleInventoryUpdate = () => {
    navigate(`/update-inventory/${inventory._id}`);
  };

  if (loadData) {
    return <Loading loadData={loadData} />;
  }

  return (
    <>
      {open && (
        <ConfirmationBox
          setOpen={setOpen}
          delivered={inventory.quantity >= 1 ? true : false}
          stockOut={inventory.quantity <= 0 ? true : false}
          deliveredMessage={deliveredMessage}
        />
      )}

      <section className="inventory-item-details">
        <div className="inventory-item-details container">
          <div className="items-owner-details">
            <div className="owner-deatils-content">
              <h4>Email: {user.email}</h4>
              <h4>Outlet: {inventory.outlet}</h4>
              <h4>Warehouse: {inventory.warehouse}</h4>
              <h4>Product Id: {inventory._id}</h4>
            </div>
            <div className="owner-details-btn">
              <button onClick={handleManageInventory} className="btn btn-sm">
                Manage Inventories
              </button>
              <button onClick={handleInventoryUpdate} className="btn btn-sm">
                Update Inventory
              </button>
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
                <span>
                  Quantity:{" "}
                  <span className="stock-message">{inventory.quantity}</span>
                </span>
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
                disabled={inventory.quantity <= 0 ? true : false}
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
    </>
  );
};

export default InventoryItemDetails;
