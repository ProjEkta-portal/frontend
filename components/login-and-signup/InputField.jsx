// components/InputField.jsx
import Image from "next/image";
import React from "react";

const InputField = ({ value, onChange, type, placeholder, iconSrc }) => (
  <div className="bg-[#F9F9FB] border border-black/25 relative my-2 py-1 w-5/6 rounded-md">
    {iconSrc && (
      <Image
        src={iconSrc}
        alt={`${placeholder} icon`}
        width={18}
        height={18}
        className="absolute top-1/2 transform -translate-y-1/2 left-4"
      />
    )}
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full h-full pl-20 focus:outline-none bg-transparent text-[18px]"
      required
    />
  </div>
);

InputField.defaultProps = {
  width: "212px",
  height: "14px",
};

export default InputField;
