import React from "react";

export default function Targeta(props) {
    const {img,inventory,description,price}=props;
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2 ">
      <img
        className="w-30 h-20 object-cover -mt-20 shadow-2xl rounded-full"
        src={img}
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">{price}</span>
      <p className="text-gray-500">{inventory} Bouls avalible</p>
    </div>
  );
}
