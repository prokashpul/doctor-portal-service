import React from "react";

const InfoTestimonial = ({ testimonial }) => {
  const { img, deg, name, command } = testimonial || {};
  return (
    <div class="card md:w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{command}</p>
      </div>
      <div className="flex justify-start items-center pb-10 px-10">
        <figure className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="Album" className="w-[64px] h-[64px]" />
        </figure>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>{deg}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoTestimonial;
