import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div className="my-10">
      <h3 className="text-center text-lg text-secondary font-semibold">
        Available Appointments on {format(date, "PP")}.
      </h3>
    </div>
  );
};

export default AvailableAppointment;
