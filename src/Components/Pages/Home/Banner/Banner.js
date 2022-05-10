import React from "react";
import bannerBg from "../../../../assets/images/chair.png";
import PrimaryButton from "../../../Utilities/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div class="hero ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <figure className="">
          <img src={bannerBg} alt="Album" className="w-full" />
        </figure>
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
