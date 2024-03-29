"use client";
import Image from "next/image";
import React from "react";

interface Props{
  title: string,
  className?: string,
  // action: Function
}
const GoogleButton = (params: Props) => {
  return (
    <div
      className={`flex py-[13px] px-[15px] gap-[15px] items-center rounded-md shadow-custom justify-center cursor-pointer ${params.className || ""}`}
      onClick={() => {}}
    >
      <Image
        src={"/image/Google Logo.jpg"}
        alt="google"
        width={24}
        height={24}
      />
      <h3 className="text-[20px] text-[#757575] font-roboto">
        { params.title }
      </h3>
    </div>
  );
};

export default GoogleButton;
