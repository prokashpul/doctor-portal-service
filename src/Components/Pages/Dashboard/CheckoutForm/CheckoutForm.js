import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [carError, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setError(error?.message || "");
    toast(carError);
  };
  return (
    <>
      <>
        {carError && <p className="text-red-500 mx-auto my-5"> {carError}</p>}
      </>
      <form className="md:p-10" onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-sm text-white btn-primary my-5"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay now
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
