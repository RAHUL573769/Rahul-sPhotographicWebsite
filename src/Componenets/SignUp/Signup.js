import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../Firebase/Firebaseinit";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { async } from "@firebase/util";

const Signup = () => {
  const [agree, setAgree] = useState(false);

  const [errormessage, displayErrorMessage] = useState("");
  const signUpEmailRef = useRef("");
  const signUpPassRef = useRef("");
  const signUpConfirm = useRef("");
  const handleSignup = async (event) => {
    event.preventDefault();
    const email = signUpEmailRef.current.value;
    const password = signUpPassRef.current.value;
    const confirmpassword = signUpConfirm.current.value;

    if (password !== confirmpassword) {
      displayErrorMessage("Password Donot Match");
    }

    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up Please!!!</h2>

        <form onSubmit={handleSignup} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              ref={signUpEmailRef}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input ref={signUpPassRef} type="password" name="password" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input ref={signUpConfirm} type="password" name="password" id="" />
          </div>
          <p className="text-danger">{errormessage}</p>
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          />{" "}
          <label
            className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
            htmlFor="terms"
          >
            Accept Terms And Conditions?
          </label>
          <input
            disabled={!agree}
            className="formsubmit w-50 mx-auto"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          Already Have An Account?<Link to="/login">Click Here</Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signup;
