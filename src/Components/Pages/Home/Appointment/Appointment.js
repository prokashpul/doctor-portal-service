import React from "react";
import treatment from "../../../../assets/images/doctor.png";
import PrimaryButton from "../../../Utilities/PrimaryButton/PrimaryButton";
import appointmentBg from "../../../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <section
      style={{
        background: `url(${appointmentBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="hero "
    >
      <div className="hero-content flex-col md:flex-row gap-10 p-10 md:p-0">
        <figure className="mt-[-120px] hidden md:block">
          <img
            src={treatment}
            alt="Album"
            className="md:w-[450px] md:h-[520px] w-full rounded-lg"
          />
        </figure>
        <div className="md:w-[450px] text-neutral">
          <h4 className="text-primary text-lg mt-5">Appointment</h4>
          <h2 className="font-bold text-2xl">Make an appointment Today</h2>
          <p className="py-5">
            We are a dental practice devoted to restoring and enhancing the
            natural beauty of your smile using conservative, state-of-the-art
            procedures that will result in beautiful, long lasting smiles!
          </p>
          <PrimaryButton>STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
