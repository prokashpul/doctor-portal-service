import React from "react";

const SingleCard = ({ bgColor, img, title, des }) => {
  return (
    <div
      className={`card flex-col md:flex-row flex-wrap md:p-4 py-4 px-2 justify-center  items-center card-side md:w-[450px] md:h-[190px] shadow-xl my-4  text-neutral ${bgColor}`}
    >
      <figure>
        <img src={img} className="h-[86px] " alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[20px] font-bold">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SingleCard;
