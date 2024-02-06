import Image from "next/image";
import React from "react";

const Cards = ({ image, desc, name, height, width }) => {
  return (
    <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center px-5 pb-5 rounded-lg drop-shadow-2xl">
      <Image
        className="rounded-full drop-shadow-md"
        src={image}
        height={height}
        width={width}
        alt="logo1"
      />
      <span className="text-3xl font-bold mt-2">{name}</span>
      <p className="text-sm mt-4 font-thin">{desc}</p>
      <button className="bg-[#183C81] text-white px-3 py-1 rounded-lg mt-5">
        Visit Site
      </button>
    </div>
  );
};

export default Cards;
