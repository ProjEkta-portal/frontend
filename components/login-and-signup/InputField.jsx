// components/InputField.jsx
import Image from "next/image";
import React from "react";

const InputField = ({ value, onChange, type, placeholder, iconSrc, width, height }) => (
<div style={{ width: width, height: height }} className="bg-[#F9F9FB] border-b border-black/25 relative">
      {iconSrc && (
      <Image
        src={iconSrc}
        alt={`${placeholder} icon`}
        width={24}
        height={24}
        className="absolute top-1/2 transform -translate-y-1/2 left-4"
      />
    )}
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full h-full pl-20 pr-4 focus:outline-none bg-transparent text-[20px] leading-[24px] font-normal"
      required
    />
  </div>
);

InputField.defaultProps = {
  width: '512px',
  height: '42px'
};

export default InputField;
