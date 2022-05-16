import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../Firebase.init";

const ShowModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment || {};
  const [user] = useAuthState(auth);
  const handelForm = async (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const patient = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const treatment = name;
    const booking = { date, patient, email, slot, address, _id, treatment };
    // api call
    await axios.post("http://localhost:5000/booking", booking).then((res) => {
      if (res?.data?.success) {
        toast.success(`Appointment Successful ${date} At ${slot}`);
      } else {
        toast.warning(`Already have an appointment on ${date} At ${slot}`);
      }
    });
    refetch();
    setTreatment(null);
    console.log(booking);
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
