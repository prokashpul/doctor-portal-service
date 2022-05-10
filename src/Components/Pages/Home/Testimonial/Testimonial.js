import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import per1 from "../../../../assets/images/people1.png";
import per2 from "../../../../assets/images/people2.png";
import per3 from "../../../../assets/images/people3.png";
import InfoTestimonial from "./InfoTestimonial/InfoTestimonial";
const person = [
  {
    name: "Winson Herry",
    deg: "California",
    img: `${per1}`,
    command:
      "Very good service and facilities. I always look forward to the visit as they give options and good advise. Using the right health provider helps save a lot of money especially if you need dental work.",
    _id: 1,
  },
  {
    name: "Lena Uila",
    deg: "Greater Melbourne",
    img: `${per2}`,
    command:
      "Very good service and facilities. I always look forward to the visit as they give options and good advise. Using the right health provider helps save a lot of money especially if you need dental work.",
    _id: 2,
  },
  {
    name: "Max Herry",
    deg: "Greater Melbourne",
    img: `${per3}`,
    command:
      "Very good service and facilities. I always look forward to the visit as they give options and good advise. Using the right health provider helps save a lot of money especially if you need dental work.",
    _id: 3,
  },
];
const Testimonial = () => {
  return (
    <section className="max-w-[1280px] mx-auto p-10">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primary text-lg mt-5">Testimonial </h4>
          <h2 className="font-bold text-2xl">What Our Patients Says</h2>
        </div>
        <figure className="">
          <img src={quote} alt="Album" className="w-[192px] h-[152px]" />
        </figure>
      </div>
      <div>
        <div className="flex flex-col md:flex-row flex-wrap justify-around my-10 items-center gap-5">
          {person.map((testimonial) => (
            <InfoTestimonial
              testimonial={testimonial}
              key={testimonial._id}
            ></InfoTestimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
