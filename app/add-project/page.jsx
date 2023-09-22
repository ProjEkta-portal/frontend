// pages/signup/personal-info/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputField from "/components/login-and-signup/InputField";

export default function AddProject({ onNext }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [ref, setRef] = useState("");
  const [contributors, setContributors] = useState([{ value: "" }]);
  const [isValid, setIsValid] = useState(false);

  const addMoreContributors = () => {
    setContributors([...contributors, { value: "" }]);
  };

  const handleContributorChange = (e, index) => {
    const newContributors = [...contributors];
    newContributors[index].value = e.target.value;
    setContributors(newContributors);
  };

  useEffect(() => {
    const areContributorsValid =
      contributors.length > 0 &&
      contributors.every((contributor) => contributor.value.trim() !== "");
    console.log(
      "Is Valid:",
      title && description && tech && areContributorsValid
    );
    setIsValid(title && description && tech && areContributorsValid);
  }, [title, description, tech, contributors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      onNext();
      router.push("/dashboard");
    } else {
      // Display a tooltip when hovering over the button
      alert("Fill all the required fields");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white w-full">
      <div className="flex flex-col space-y-4 items-center lg:items-start w-full">
        <h2 className="head-text text-4xl font-bold leading-[58px]">
          Add Project
        </h2>

        {/* INPUT FIELDS */}
        <span className="font-inter font-semibold text-[18px]">
          Enter Project Title*
        </span>
        <InputField
          type="text"
          placeholder="Recommendation System for E-Commerce Website"
          iconSrc="/assets/projector-three-filled.svg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          width="100%"
          height="42px"
        />

        <span className="font-inter font-semibold text-[18px]">
          Enter Project Description*
        </span>
        <InputField
          type="text"
          placeholder="A short Description about the project(400-500 words)"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          width="100%"
          height="150px"
        />
        <span className="font-inter font-semibold text-[18px]">
          Technologies Used*
        </span>
        <InputField
          type="text"
          placeholder="Enter at least 5 technologies used"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          width="100%"
          height="42px"
        />
        <span className="font-inter font-semibold text-[18px]">
          Reference Links(if any)
        </span>
        <InputField
          type="text"
          placeholder="Enter any references used"
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          width="100%"
          height="42px"
        />
        <span className="font-inter font-semibold text-[18px]">
          Add Contributors
        </span>
        {contributors.map((contributor, index) => (
          <InputField
            key={index}
            type="text"
            placeholder="Enter Email ID/User ID"
            value={contributor.value}
            onChange={(e) => handleContributorChange(e, index)}
            width="100%"
            height="42px"
          />
        ))}
        <span onClick={addMoreContributors} className="cursor-pointer">
          Add more contributors...
        </span>
      </div>

      <div className="flex flex-col space-y-4 justify-end">
        <form onSubmit={handleSubmit}>
          <button
            style={{ width: "1000px" }}
            type="submit"
            onClick={() => router.push("/dashboard")}
            className={`orange-btn h-[75px] flex items-center justify-center transition-transform duration-300 ease-out transform ${
              !isValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isValid}
          >
            Save Project
            {!isValid && (
              <span className="tooltip">Fill all the required fields</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}