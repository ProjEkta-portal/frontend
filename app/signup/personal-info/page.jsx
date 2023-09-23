// pages/signup/personal-info/page.jsx
"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import InputField from "/components/login-and-signup/InputField";
import SocialIcon from "/components/login-and-signup/SocialIcon";
import NavigationLink from "/components/login-and-signup/NavigationLink";
import ProgressBar from "/components/login-and-signup/ProgressBar";

export default function PersonalInfo({onNext}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Contact:", contact);
    console.log("Is Valid:", name && email && password && contact);
    setIsValid(name && email && password && contact);
  }, [name, email, password, contact]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) onNext();
    else {
      // Display a tooltip when hovering over the button
      alert("Fill all the required fields");
    }
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="hidden md:flex w-1/2">
        {/* Main Image */}
        <Image
          src="/assets/boy.png"
          alt="Main decorative image"
          width={650}
          height={180}
        />
      </div>

      <div className="flex flex-col justify-center p-4">
        <div className="flex flex-col space-y-4 items-center lg:items-start">
          <Image
            src="/assets/icon.png"
            alt="Logo or icon"
            width={150}
            height={150}
            className="self-center lg:self-start"
          />
          <h2 className="head-text text-4xl font-bold leading-[58px]">
            Personal Information
          </h2>
          <div className="body">
            {"Welcome! Let's start with your basic information."}
          </div>
          <ProgressBar currentStep={1} />

          {/* INPUT FIELDS */}
          <InputField
            type="text"
            placeholder="Full Name"
            iconSrc="/assets/edit-name-filled.svg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email ID"
            iconSrc="/assets/mail-filled.svg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Create Password"
            iconSrc="/assets/lock-filled.svg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            type="number"
            placeholder="Contact Number"
            iconSrc="/assets/phone-call-filled.svg"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* Or Text */}
        <span className="self-center font-inter font-semibold text-[24px]">
          Or
        </span>

        <div className="flex space-x-8 justify-center w-full mt-4">
          {/* Google Social Icon */}
          <SocialIcon
            src="/assets/google.svg"
            alt="Google icon"
            onClick={() => router.push("/login/google")}
          />

          {/* Facebook Social Icon */}
          <SocialIcon
            src="/assets/facebook.svg"
            alt="Facebook icon"
            onClick={() => router.push("/login/facebook")}
          />
        </div>

        <div className="flex flex-col space-y-4 justify-end">
          <NavigationLink
            normalText="Already have an account?"
            boldText="Login Now"
            route="/login"
          />

          <div className="flex flex-col space-y-4 justify-end">
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className={`orange-btn h-[64px] flex items-center justify-center transition-transform duration-300 ease-out transform ${
                  !isValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isValid}
              >
                NEXT
                {!isValid && (
                  <span className="tooltip">Fill all the required fields</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
