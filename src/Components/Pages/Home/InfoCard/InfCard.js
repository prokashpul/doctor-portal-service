import React from "react";
import SingleCard from "./SingleCard/SingleCard";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
const InfCard = () => {
  return (
    <section className="md:flex gap-4 max-w-[1480px] p-10 justify-center items-center">
      <SingleCard
        bgColor="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary duration-500"
        title="Opening Hours"
        img={clock}
        des="6am - 9pm"
      ></SingleCard>
      <SingleCard
        bgColor="bg-accent "
        title="Visit our location"
        img={marker}
        des="Brooklyn, NY 10036, United States"
      ></SingleCard>
      <SingleCard
        bgColor="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary duration-500"
        title="Contact us now"
        img={phone}
        des="+1(845)6002121"
      ></SingleCard>
    </section>
  );
};

export default InfCard;
