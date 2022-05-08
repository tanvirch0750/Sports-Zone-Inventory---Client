import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";
import Loading from "../../components/Loading/Loading";
import useInventory from "../../hooks/useInventory";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [inventory, loadData, setInventory] = useInventory();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

  const deleteFunction = () => {
    const url = `https://sheltered-dusk-40415.herokuapp.com/inventory/${deleteId}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainning = inventory.filter((inv) => inv._id !== deleteId);
        setInventory(remainning);
      });
  };

  const handleDelete = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };

  if (loadData) {
    return <Loading loadData={loadData} />;
  }

  return (
    <>
      {open && (
        <ConfirmationBox
          setOpen={setOpen}
          deleteFunction={deleteFunction}
          confirmation={true}
        />
      )}
      <section className="manage-inventory">
        <div className="manage-inventory-inner container">
          <div className="table-header">
            <h3>Manage Inventories</h3>
            <button onClick={() => navigate("/add-item")} className="btn">
              Add Item
            </button>
          </div>
          <div className="table-section">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Outlet</th>
                  <th>Supplier</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Warehouse</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item._id}>
                    <td data-lebel="Name">{item.name}</td>
                    <td data-lebel="Outlet">{item.outlet}</td>
                    <td data-lebel="Supplier">{item.supplier}</td>
                    <td data-lebel="Price">{item.price}</td>
                    <td data-lebel="Quantity">{item.quantity}</td>
                    <td data-lebel="Warehouse">{item.warehouse}</td>
                    <td data-lebel="Delete">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn table-btn"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="btn table-btn"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageInventory;
