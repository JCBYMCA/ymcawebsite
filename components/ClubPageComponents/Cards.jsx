import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = ({ image, desc = "", name, height, width, url }) => {
  return (
    <div className="bg-[#F5F7FA] w-[220px] flex flex-col items-center m-5 px-5 pb-5 duration-700 hover:scale-[1.02] rounded-lg drop-shadow-xl">
      <Image
        className="rounded-full drop-shadow-md"
        src={image}
        height={height}
        width={width}
        alt="logo1"
      />
      <span className="text-3xl font-bold mt-2">{name}</span>
      <p className="text-sm mt-4 font-thin">{desc.substring(0,100)+"..."}</p>
      <a href={url} target="_blank" rel="noreferrer noopener"></a>
      <button className="bg-[#183C81] text-white px-3 py-1 duration-100 hover:scale-[1.03] rounded-lg mt-5">
        Visit Site
      </button>
    </div>
  );
};

export default Cards;
