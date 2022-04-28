import React from "react";
import { useParams } from "react-router-dom";

const Check = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>Check Out </h1>

      <form action="">
        <label htmlFor="username">Name</label>
        <input type="text" name="User Name" id="" />
        <label htmlFor="email">User Email</label>
        <input type="email" name="useremail" id="" />
        <label htmlFor="address">Address</label>
        <input type="text" name="useraddress" id="" />
      </form>
    </div>
  );
};

export default Check;
