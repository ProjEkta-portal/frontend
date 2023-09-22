// pages/signup/interests-skills/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "/components/login-and-signup/InputField";
import SocialIcon from "/components/login-and-signup/SocialIcon";
import NavigationLink from "/components/login-and-signup/NavigationLink";
import ProgressBar from "/components/login-and-signup/ProgressBar";
import Link from "next/link";

export default function Interests({ onNext }) {
  const router = useRouter();
  const [areasOfInterest, setAreasOfInterest] = useState("");
  const [skills, setSkills] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(areasOfInterest && skills && agreeToTerms);
  }, [areasOfInterest, skills, agreeToTerms]);

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

      <div className="flex flex-col justify-center m-auto p-4">
        <div className="flex flex-col space-y-6 items-center lg:items-start">
          <Image
            src="/assets/icon.png"
            alt="Logo or icon"
            width={150}
            height={150}
            className="self-center lg:self-start"
          />
          <h2 className="head-text text-4xl font-bold leading-[58px]">
            Interests & Skills
          </h2>
          <div className="body">
            Share your academic interests and skills to help us personalize your
            experience.
          </div>
          <ProgressBar currentStep={3} />

          <InputField
            type="text"
            placeholder="Areas of Interest (0/5)"
            iconSrc="/assets/like-filled.svg"
            value={areasOfInterest}
            onChange={(e) => setAreasOfInterest(e.target.value)}
            required
          />
          <InputField
            type="text"
            placeholder="Skills & Expertise(0/5)"
            iconSrc="/assets/puzzle-filled.svg"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center space-x-2 mt-4">
          {/* Checkbox */}
          <input
            type="checkbox"
            id="agreeToTerms"
            className="w-4 h-4 text-orange border-gray-300 focus:ring-orange"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            required
          />

          {/* Label */}
          <label
            htmlFor="agreeToTerms"
            className="font-inter font-normal text-[17px] leading-[21px] text-black"
          >
            I agree to the{" "}
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </label>
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
                Create Account
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
