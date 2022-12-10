import React from "react";

export const Button = ({ styles }) => {
  return (
    <button type="button" className={`${styles} bg-blue-gradient py-4 px-6 my-7 rounded-md font-poppins font-medium text-[18px] text-primary outline-none `}>
      Get Started
    </button>
  );
};
