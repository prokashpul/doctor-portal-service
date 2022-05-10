import React from "react";
import banner from "../../../../assets/images/chair.png";
import PrimaryButton from "../../../Utilities/PrimaryButton/PrimaryButton";
import bannerBg from "../../../../assets/images/bg.png";
const Banner = () => {
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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <figure className="">
          <img src={banner} alt="Album" className="w-full" />
        </figure>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
