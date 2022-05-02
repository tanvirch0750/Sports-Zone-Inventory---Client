import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Social from "../Social/Social";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState([]);

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPassword: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    setFormData(data);
  };
  console.log(formData);
  return (
    <section className="signup">
      <div className="container signup-inner">
        <div className="form-container">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="name">Your name:</label>
              <input
                {...register("name", {
                  required: "Please give your name",
                  minLength: {
                    value: 4,
                    message: "Minimum length is four",
                  },
                })}
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              <p className="error-message">{errors.name?.message}</p>
            </div>
            {/* <div className="form-control">
              <label htmlFor="store">Your store/business name:</label>
              <input
                {...register("store", {
                  required: "Please give store/business name",
                })}
                id="store"
                type="text"
                placeholder="Enter your store/buiness name"
              />
              <p className="error-message">{errors.store?.message}</p>
            </div> */}
            <div className="form-control">
              <label htmlFor="name">Your email:</label>
              <input
                {...register("email", {
                  required: "Please provide your email address",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please provide a valid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email"
              />
              <p className="error-message">{errors.email?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="name">Your password:</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
              />
              <p className="error-message">{errors.password?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="name">Confirm your password:</label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm your password"
              />
              <p className="error-message">{errors.confirmPassword?.message}</p>
            </div>
            {/* <div className="form-control">
              <label htmlFor="name">Select one of our warehouse:</label>
              <select
                {...register("Warehouse", {
                  required: "Please select a warehouse",
                })}
              >
                <option value="Chicago">Chicago</option>
                <option value="Illinios">Illinios</option>
                <option value="New York">Hell Kitchen</option>
              </select>
              <p className="error-message">{errors.address?.message}</p>
            </div> */}
            <input type="submit" className="btn form-btn" value="Signup" />
          </form>
          <Social text="Signup" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
