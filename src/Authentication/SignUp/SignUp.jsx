import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loading from "../../components/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import useToken from "../../hooks/useToken";
import "../Form.css";
import Social from "../Social/Social";
import "./SignUp.css";

const SignUp = () => {
  const [customError, setCustomError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = useToken(user);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/email-already-in-use")) {
        setCustomError("Alreary have an account with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Please Provide a valid email"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPassword: Yup.string()
      .required("Password does not match")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);

  if (loading) {
    return <Loading loadData={loading} />;
  }

  return (
    <section className="signup">
      <div className="container signup-inner">
        <div className="form-container">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="name">Your email:</label>
              <input
                {...register("email")}
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
            {customError && <p className="error-message">{customError}</p>}
            <input type="submit" className="btn form-btn" value="Signup" />
          </form>
          <p className="login-signup-text">
            Already have an account?{" "}
            <Link to="/login" className="login-signup-link">
              Login
            </Link>
          </p>
          <Social text="Signup" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
