import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../../../Sheared/Spinner/Spinner";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0atQGsojxMCBEGOjCobionVxcEYXfQJLnIAaUfHzQv1n401xWh7dumcOJQHvyWlfE4miMU8JlfgHv3aOlrIbIS00QISYLmow"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/bookings/${id}`;
  console.log(url);
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );
  const { treatment, price, patientName, slot, date, address } =
    appointment || {};

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="mx-auto">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p>
            <small className="text-secondary">Hello!, {patientName}</small>
          </p>
          <h2 class="card-title text-primary">Please pay for: {treatment}</h2>
          <p>
            Your Appointment: <span className="text-orange-700">{slot}</span> at{" "}
            {date}
          </p>
          <p className="font-bold">
            Please pay:
            <span className="text-primary ml-">${price}</span>{" "}
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
