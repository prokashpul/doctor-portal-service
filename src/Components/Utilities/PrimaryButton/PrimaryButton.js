import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button class="btn btn-primary text-neutral bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary duration-500">
      {children}
    </button>
  );
};

export default PrimaryButton;
