import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    setFormData(data);
  };
  console.log(formData);
  return (
    <section className="login">
      <div className="container login-inner">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("password", {
                  required: "Please give your password",
                })}
                type="password"
                placeholder="Enter your password"
              />
              <p className="error-message">{errors.password?.message}</p>
            </div>
            <input type="submit" className="btn form-btn" value="Login" />
          </form>
          <Social text="Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
