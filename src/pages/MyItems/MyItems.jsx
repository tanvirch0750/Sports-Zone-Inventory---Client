import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import Loading from "../../components/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import "./MyItems.css";

const MyItems = () => {
  const [inventory, setInventory] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);
  const naviagate = useNavigate();

  useEffect(() => {
    setLoadData(true);
    const getInventory = async () => {
      const email = user.email;
      const url = `https://sheltered-dusk-40415.herokuapp.com/inventory/myItems?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);

        setInventory(data);
        setLoadData(false);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          naviagate("/login");
        }
      }
    };
    getInventory();
  }, [user]);

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

  if (loadData) {
    return <Loading loadData={loadData} />;
  }

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
