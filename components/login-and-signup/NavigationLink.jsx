'use client'
import React from 'react';
import { useRouter } from "next/navigation";

const NavigationLink = ({ normalText, boldText, route }) => {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-2 mt-9">
      <span className="font-inter font-normal text-[17px] leading-[21px] text-black">{normalText}</span>
      <span className="font-inter font-bold text-[17px] leading-[21px] text-[#2C2F27] cursor-pointer" onClick={() => router.push(route)}>{boldText}</span>
    </div>
  );
};

export default NavigationLink;
