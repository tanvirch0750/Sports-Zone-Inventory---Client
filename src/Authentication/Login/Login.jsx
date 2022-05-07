import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../hooks/useToken";
import "../Form.css";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  const [formdata, setFormData] = useState({});
  const [customError, setCustomError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/wrong-password")) {
        setCustomError("Your password is wrong");
      } else if (error.message.includes("auth/user-not-found")) {
        setCustomError("Account not found with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const onSubmit = async (dataa) => {
    await signInWithEmailAndPassword(dataa.email, dataa.password);
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  const email = watch("email");
  function validateEmail() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const handleResetEmail = async () => {
    if (validateEmail()) {
      await sendPasswordResetEmail(email);
    }

    if (!validateEmail()) {
      toast("Please enter your valid email.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast("A password reset link was sent to your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (loading || sending) {
    return <Loading loadData={loading || sending} />;
  }

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
            {customError && <p className="error-message">{customError}</p>}
            <input type="submit" className="btn form-btn" value="Login" />
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <p className="forgot-password--text">
            Forgot your password?{" "}
            <span onClick={handleResetEmail}>Reset your password</span>
          </p>
          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="login-signup-link">
              Sign Up
            </Link>
          </p>
          <Social text="Login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
