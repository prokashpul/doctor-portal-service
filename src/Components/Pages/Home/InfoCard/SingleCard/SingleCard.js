import React from "react";

const SingleCard = ({ bgColor, img, title, des }) => {
  return (
    <div
      class={`card p-4  items-center card-side w-[450px] h-[190px] shadow-xl my-4  text-neutral ${bgColor}`}
    >
      <figure>
        <img src={img} className="h-[86px] " alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-[20px] font-bold">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SingleCard;
