import React from "react";
import treatment from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../Utilities/PrimaryButton/PrimaryButton";
import bannerBg from "../../../../assets/images/bg.png";

const Terms = () => {
  return (
    <section
      style={{
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="hero p-10"
    >
      <div className="hero-content flex-col md:flex-row gap-10 ">
        <figure className="">
          <img
            src={treatment}
            alt="Album"
            className="md:w-[450px] md:h-[520px] w-full rounded-lg"
          />
        </figure>
        <div className="md:w-[450px]">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            At Exceptional Dental, your smile is our top priority. We are
            dedicated to providing you with the personalized and gentle care
            that you deserve. When you visit our office, you can expect all that
            modern dentistry has to offer, including a comprehensive list of
            general, restorative and cosmetic dental services to meet the needs
            of the whole family. Our goal is to assist each patient in achieving
            and maintaining long-term dental health and a beautiful smile. We
            are a dental practice devoted to restoring and enhancing the natural
            beauty of your smile using conservative, state-of-the-art procedures
            that result in beautiful, long lasting smiles!
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Terms;
