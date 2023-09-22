// components/InputField.jsx
import Image from "next/image";
import React from "react";

const InputField = ({ value, onChange, type, placeholder, iconSrc }) => (
  <div className="mx-auto my-3 p-1 w-96 bg-[#F9F9FB] border-b border-black/25 relative">
    <Image
      src={iconSrc}
      alt={`${placeholder} icon`}
      width={18}
      height={18}
      className="absolute top-1/2 transform -translate-y-1/2 left-4"
    />
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="pl-20 pr-4 focus:outline-none bg-transparent text-[16px] leading-[16px]"
      required
    />
  </div>
);

export default InputField;
