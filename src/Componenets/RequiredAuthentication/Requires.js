import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebaseinit";
import Loading from "../Shared/Loading/Loading";

const Requires = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  console.log("inside reqired auth", user);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Requires;
