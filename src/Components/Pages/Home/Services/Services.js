import React from "react";
import SingleServices from "./SingleServices/SingleServices";
import cavity from "../../../../assets/images/cavity.png";
import fluoride from "../../../../assets/images/fluoride.png";
import whitening from "../../../../assets/images/whitening.png";
const Services = () => {
  return (
    <section className="text-center my-5">
      <h4 className="text-primary text-lg">OUR SERVICES</h4>
      <h2 className="font-bold text-2xl">Services We Provide</h2>
      <div className="md:flex gap-4 max-w-[1480px] p-10 justify-center items-center">
        <SingleServices
          bgColor="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary duration-500"
          title="Fluoride Treatment"
          img={cavity}
          des="Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist"
        ></SingleServices>
        <SingleServices
          bgColor="bg-accent "
          title="Cavity Filling"
          img={fluoride}
          des="Amalgam Fillings: Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities."
        ></SingleServices>
        <SingleServices
          bgColor="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary duration-500"
          title="Teeth Whitening"
          img={whitening}
          des=" Whitening gels are clear, peroxide-based gels applied with a small brush directly to the surface of your teeth. Instructions vary depending on ."
        ></SingleServices>
      </div>
    </section>
  );
};

export default Services;
