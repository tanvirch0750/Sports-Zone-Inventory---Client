import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const InventoryItemDetails = () => {
  const [inventory, setInventory] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);
  const { id } = useParams();

  useEffect(() => {
    setLoadData(true);
    const email = user.email;
    fetch(`https://sheltered-dusk-40415.herokuapp.com/inventory/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoadData(false);
      });
  }, []);

  return (
    <section className="inventory-item-details">
      <div className="inventory-item-details container">
        <h1>{inventory.name}</h1>
      </div>
    </section>
  );
};

export default InventoryItemDetails;
