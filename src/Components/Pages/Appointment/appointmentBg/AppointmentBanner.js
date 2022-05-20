import React from "react";
import chair from "../../../../assets/images/chair.png";
import appointmentBg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${appointmentBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="hero p-10"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="">
          <img src={chair} alt="Album" className="w-full md:w-[590px]" />
        </figure>
        <div className="w-full md:w-[590px]">
          <DayPicker mode="single" selected={date} onDayClick={setDate} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
