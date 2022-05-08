import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ConfirmationBox from "../../components/ConfirmationBox/ConfirmationBox";
import Loading from "../../components/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});
  const [open, setOpen] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    let newData = { ...data, quantity: +data.quantity, price: +data.price };
    setLoadData(true);
    fetch("https://sheltered-dusk-40415.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoadData(false);
        setOpen(true);
        reset();
      });
  };

  useEffect(() => {
    let defaultValues = {};

    defaultValues.email = user.email;

    reset({ ...defaultValues });
  }, []);

  if (loadData) {
    return <Loading loadData={loadData} />;
  }

  return (
    <>
      {open && <ConfirmationBox setOpen={setOpen} addSuccess={true} />}
      <section className="add-item">
        <div className="add-item-inner container">
          <div className="form-container">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-container-inner">
                <div className="form-control">
                  {/* <label htmlFor="name">Item Name:</label> */}
                  <input
                    {...register("name", { required: "Enter your item name" })}
                    id="name"
                    type="text"
                    placeholder="Enter your item name"
                  />
                  <p className="error-message">{errors.name?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="email">Your Email:</label> */}
                  <input
                    {...register("email", { required: "Enter your email" })}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="outlet">Select outlet:</label> */}
                  <select
                    {...register("outlet", {
                      required: "Please select a outlet",
                    })}
                  >
                    <option value="" disabled selected hidden>
                      Select our outlet
                    </option>
                    <option value="Chicago">Chicago</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Florida">Florida</option>
                    <option value="Washington">Washington</option>
                    <option value="New York">New York</option>
                  </select>
                  <p className="error-message">{errors.outet?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="image">Item image:</label> */}
                  <input
                    {...register("image", {
                      required: "Enter item image link",
                    })}
                    type="text"
                    placeholder="Enter item image link"
                  />
                  <p className="error-message">{errors.image?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="quantity">Item quantity:</label> */}
                  <input
                    {...register("quantity", {
                      required: "Enter item quantity",
                    })}
                    type="number"
                    placeholder="Enter item quantity"
                  />
                  <p className="error-message">{errors.number?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="supplier">Supplier:</label> */}
                  <input
                    {...register("supplier", {
                      required: "Enter item supplier name",
                    })}
                    type="text"
                    placeholder="Enter item supplier name"
                  />
                  <p className="error-message">{errors.supplier?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="price">Price:</label> */}
                  <input
                    {...register("price", { required: "Enter item price" })}
                    type="number"
                    placeholder="Enter item price name"
                  />
                  <p className="error-message">{errors.price?.message}</p>
                </div>
                <div className="form-control">
                  {/* <label htmlFor="description">Description:</label> */}
                  <input
                    {...register("description", {
                      required: "Enter item short description",
                    })}
                    type="text"
                    placeholder="Enter item shor description"
                  />
                  <p className="error-message">{errors.description?.message}</p>
                </div>

                <div className="form-control">
                  {/* <label htmlFor="warehouse">Select one of our warehouse:</label> */}
                  <select
                    {...register("warehouse", {
                      required: "Please select a warehouse",
                    })}
                  >
                    <option value="" disabled selected hidden>
                      Select Warehouse
                    </option>
                    <option value="Chicago Inventory">Chicago Inventory</option>
                    <option value="Arizona Inventory">Arizona Inventory</option>
                    <option value="Florida Inventory">Florida Inventory</option>
                    <option value="Washigton Inventory">
                      Washington Inventory
                    </option>
                    <option value="New York Inventory">
                      New York Inventory
                    </option>
                  </select>
                  <p className="error-message">{errors.warehouse?.message}</p>
                </div>
              </div>

              <input type="submit" className="btn form-btn" value="Add Item" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddItem;
