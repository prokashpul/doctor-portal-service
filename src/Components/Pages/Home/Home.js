import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import InfoCard from "./InfoCard/InfCard";
import Services from "./Services/Services";
import Terms from "./Terms/Terms";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Terms></Terms>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
