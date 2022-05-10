import { format } from "date-fns";
import React from "react";

const ShowModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment || {};

  const handelForm = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const slot = event.target.slot.value;
    const userName = event.target.name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;

    console.log(date, userName, email, slot, address, _id, name);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="treatment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <label
            for="treatment-modal"
            class="btn btn-sm btn-circle absolute btn-accent right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <form action="" onSubmit={handelForm} className="flex flex-col gap-5">
            <input
              type="text"
              name="date"
              defaultValue={format(date, "PP")}
              disabled
              class="input input-bordered w-full "
            />
            <select name="slot" class="select select-bordered w-full">
              {slots.map((slotTime) => (
                <option value="slotTime" key={slotTime.index}>
                  {slotTime}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              class="input input-bordered w-full "
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              class="input input-bordered w-full "
            />
            <button
              type="submit"
              for="treatment-modal"
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
