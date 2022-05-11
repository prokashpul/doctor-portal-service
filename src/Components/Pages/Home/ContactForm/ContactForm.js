import React from "react";
import formBg from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../Utilities/PrimaryButton/PrimaryButton";
const ContactForm = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${formBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[450px] mx-auto p-10">
        <div className="text-center">
          <h4 className="text-primary text-lg mt-5">Contact Us</h4>
          <h2 className="font-bold text-2xl text-neutral ">
            Stay connected with us
          </h2>
        </div>
        <form className="flex flex-col gap-3 my-10 justify-center items-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-primary w-full "
          />
          <textarea
            className="textarea  w-full textarea-primary"
            placeholder="Your message"
          ></textarea>
          <PrimaryButton> Submit </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
