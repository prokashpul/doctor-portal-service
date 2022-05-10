import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import ContactForm from "./ContactForm/ContactForm";
import InfoCard from "./InfoCard/InfCard";
import Services from "./Services/Services";
import Terms from "./Terms/Terms";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Terms></Terms>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
