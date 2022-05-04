import React from "react";
import useInventory from "../../hooks/useInventory";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [inventory] = useInventory();
  return (
    <section className="manage-inventory">
      <div className="manage-inventory-inner container">
        <div className="table-header">
          <h3>Manage Inventories</h3>
          <button className="btn">Add Item</button>
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item._id}>
                  <td data-lebel="Name">{item.name}</td>
                  <td data-lebel="Outlet">{item.storeName}</td>
                  <td data-lebel="Supplier">{item.supplier}</td>
                  <td data-lebel="Price">{item.price}</td>
                  <td data-lebel="Quantity">{item.quantity}</td>
                  <td data-lebel="Warehouse">{item.warehouse}</td>
                  <td data-lebel="Delete">
                    <button className="btn table-btn">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageInventory;
