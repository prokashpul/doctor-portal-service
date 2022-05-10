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
      className="hero p-10 md:mb-[100px]"
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
            As your dental health professionals, we want you to be confident
            knowing that we are a team of highly trained and skilled clinicians.
            We pride ourselves in providing the care you need to keep your smile
            healthy. To give you the best possible service and results, we are
            committed to continual education and learning. We attend dental
            lectures, meetings, and dental conventions to stay informed of new
            techniques, the latest products, and the newest equipment that a
            modern dental office can utilize to provide state-of-the-art dental
            care. Also, being members of various professional dental
            associations helps us to stay abreast of the changes and
            recommendations for our profession.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Terms;
