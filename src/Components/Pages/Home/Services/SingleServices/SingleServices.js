import React from "react";

const SingleServices = ({ img, title, des }) => {
  return (
    <div
      class={`card flex-col md:flex-row flex-wrap md:p-4 py-4 px-2 justify-center   card-side md:h-[310px] md:w-[440px] shadow-xl my-4  text-center `}
    >
      <figure>
        <img src={img} className="w-[102px] " alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title justify-center text-[20px]  font-bold">
          {title}
        </h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SingleServices;
