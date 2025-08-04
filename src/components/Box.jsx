import React from "react";

const Box = ({ num, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-black text-white" : ""
      } md:h-[92px] md:w-[92px] h-[52px] w-[52px] border-[1px] border-black text-3xl flex justify-center items-center flex-wrap font-medium transition-all`}
    >
      {num}
    </div>
  );
};

export default Box;
