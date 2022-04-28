import { Button } from "bootstrap";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebaseinit";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset Email Sent");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login Please!!!</h2>

        <form onSubmit={handleSubmit} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" name="password" id="" />
          </div>
          <input
            className="formsubmit d-block mb-2 w-50 mx-auto"
            type="submit"
            value="Login"
          />
        </form>

        {errorElement}
        <p>
          New to My Website?<Link to="/signup">Create An Account</Link>
        </p>
        <p>
          Forget Password?
          <button className="btn btn-link" onClick={resetPassword}>
            Reset Password
          </button>
        </p>

        <SocialLogin></SocialLogin>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
