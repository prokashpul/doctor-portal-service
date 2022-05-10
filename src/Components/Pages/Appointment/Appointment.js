import React, { useState } from "react";
import AppointmentBanner from "./appointmentBg/AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment
        date={date}
        setDate={setDate}
      ></AvailableAppointment>
    </>
  );
};

export default Appointment;
