import React from "react";

const Info = ({ service, setTreatment }) => {
  const { name, slots } = service || {};
  return (
    <div className="card w-lg bg-neutral text-neutral-content shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p className={`uppercase  ${!slots?.length && "text-red-600"}`}>
          {slots?.length ? slots[0] : "Today no SPACES AVAILABLE"}
        </p>
        <p className={`uppercase  ${!slots?.length && "text-red-600"}`}>
          {slots?.length}
          {slots?.length ? " SPACES AVAILABLE" : " No SPACES AVAILABLE"}
        </p>
        <div className="card-actions border border-primary rounded-lg justify-end">
          <label
            for="treatment-modal"
            onClick={() => setTreatment(service)}
            disabled={slots?.length === 0}
            className="btn btn-primary text-neutral"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Info;
