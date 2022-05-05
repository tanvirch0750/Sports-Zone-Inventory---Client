import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import auth from "../../Firebase/Firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [inventory, setInventory] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setLoadData(true);
    const email = user.email;
    fetch(`https://sheltered-dusk-40415.herokuapp.com/inventory?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoadData(false);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://sheltered-dusk-40415.herokuapp.com/inventory/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainning = inventory.filter((inv) => inv._id !== id);
          setInventory(remainning);
        });
    }
  };

  return (
    <section className="my-items">
      <div className="my-items-inner">
        <div className="heading">
          <h2>My Inventories</h2>
        </div>
        <div className="my-inventory-items">
          {inventory.map((item) => (
            <InventoryItem
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyItems;
