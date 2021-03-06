import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../Firebase.init";

const ShowModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, price, _id } = treatment || {};
  const [user] = useAuthState(auth);
  const handelForm = async (event) => {
    event.preventDefault();

    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      price: price,
      treatment: name,
      slot,
      email: user.email,
      patientName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phoneNumber.value,
      date: date,
    };

    // api call

    try {
      await axios
        .post("https://warm-anchorage-40266.herokuapp.com/booking", booking)
        .then((res) => {
          if (res?.data?.success) {
            toast.success(`Appointment Successful ${date} At ${slot}`);
            refetch();
          } else {
            toast.warning(`Already have an appointment on ${date} At ${slot}`);
          }
        });
    } catch {
      return;
    }
  };
  return (
    <>
      <input type="checkbox" id="treatment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <label
            htmlFor="treatment-modal"
            className="btn btn-sm btn-circle absolute btn-accent right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary my-5">
            Booking : {name}
          </h3>
          <form action="" onSubmit={handelForm} className="flex flex-col gap-5">
            <input
              type="text"
              name="date"
              defaultValue={date}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slotTime, index) => (
                <option value={slotTime} key={index}>
                  {slotTime}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.displayName || ""}
              className="input input-bordered w-full "
              disabled
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full "
              disabled
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="phone number"
              className="input input-bordered w-full "
            />
            <button
              type="submit"
              htmlFor="treatment-modal"
              className="btn btn-primary text-neutral"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
