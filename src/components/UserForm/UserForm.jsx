import React, { useState } from "react";
import { createBuyOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import InputForm from "./InputForm";

export default function UserForm({ cart, getTotalPrice }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Thanks!",
        text: "The product will not take long to arrive at your home",
        icon: "success",
        confirmButtonText: "Cool",
      }).then((result) => {
        navigate(`/thankyou/${respuesta}`);
      });
    });
  }

  return (
    <form onSubmit={onSubmit} className="formContainer">
      
      <div className="inputContainer">
      <InputForm
        value={userData.name}
        title="Name"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      </div>
      <div className="inputContainer">
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      </div>
      <div className="inputContainer">
        <InputForm
        value={userData.phone}
        title="Phone"
        name="phone"
        onChange={onInputChange}
      />
      </div>
      
      
      <button type="submit" className="orderBtn">Create Order</button>
    </form>
  );
}