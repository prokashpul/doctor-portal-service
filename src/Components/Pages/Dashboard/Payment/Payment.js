import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Spinner from "../../../Sheared/Spinner/Spinner";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0atQGsojxMCBEGOjCobionVxcEYXfQJLnIAaUfHzQv1n401xWh7dumcOJQHvyWlfE4miMU8JlfgHv3aOlrIbIS00QISYLmow"
);
const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const url = `https://warm-anchorage-40266.herokuapp.com/bookings/${id}`;
    fetch(url, {
      "content-type": "application/json",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return <Spinner></Spinner>;
  }
  const { treatment, date, slot, email, patientName, address, phone, fees } =
    appointment || {};
  return (
    <>
      <div className="card  md:m-10 bg-base-100 shadow-2xl">
        <div className="card-body md:p-5">
          <small className="text-primary">Patient : {patientName}</small>
          <h2 className="card-title text-center text-secondary">
            Your Appointment for :{treatment}
          </h2>
          <p>
            Appointment date: {date} Appointment time:{slot}
          </p>
          <p className="text-xl">Please Pay : ${fees}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone} </p> <p>Email :{email}</p>
        </div>
      </div>
      <div className="card  md:m-10 bg-base-100 shadow-2xl">
        <div className="card-body md:p-5">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
