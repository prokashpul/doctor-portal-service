import React from "react";

const ShowModal = ({ treatment }) => {
  const { name, slots } = treatment || {};
  return (
    <>
      <input type="checkbox" id="treatment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <label
            for="treatment-modal"
            class="btn btn-sm btn-circle absolute btn-accent right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">{name}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="">
            <label
              for="treatment-modal"
              className="btn btn-primary text-neutral"
            >
              SUBMIT
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
