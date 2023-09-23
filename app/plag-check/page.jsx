// pages/signup/plag-check/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import InputField from "/components/login-and-signup/InputField";

export default function CheckPlag({ onNext }) {
  const router = useRouter();
  const [primaryTitle, setPrimaryTitle] = useState("");
  const [primaryDescription, setPrimaryDescription] = useState("");
  const [secondaryTitle, setSecondaryTitle] = useState("");
  const [secondaryDescription, setSecondaryDescription] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [plagiarismResult, setPlagiarismResult] = useState(null); 

  useEffect(() => {
    console.log(
      "Is Valid:",
      primaryTitle && primaryDescription && secondaryTitle && secondaryDescription
    );
    setIsValid(primaryTitle && primaryDescription && secondaryTitle && secondaryDescription);
  }, [primaryTitle, primaryDescription, secondaryTitle, secondaryDescription]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid) {
      try {
        const payload = {
          primaryTitle,
          primaryDescription,
          secondaryTitle,
          secondaryDescription,
        };
  
        const response = await fetch('http://your-api-endpoint.com/check-plagiarism', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        // Check if the request was successful.
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the JSON response from the backend.
        const data = await response.json();
  
        setPlagiarismResult(data.result);
        
      } catch (error) {
        console.error('Fetching plagiarism result failed', error);
        alert('Fetching plagiarism result failed. Please try again.');
      }
    } else {
      alert("Fill all the required fields");
    }
  };  

  return (
    <div className="flex flex-col justify-center items-center bg-white w-full">
      <div className="flex flex-col space-y-4 items-center lg:items-start w-full">
        <h2 className="head-text text-4xl font-bold leading-[58px]">
          Projects Details
        </h2>
        {/* INPUT FIELDS */}
        <span className="font-inter font-semibold text-[18px]">
          Enter the primary Project ID*
        </span>
        <InputField
          type="text"
          placeholder="Primary Project ID"
          iconSrc="/assets/projector-three-filled.svg"
          value={primaryTitle}
          onChange={(e) => setPrimaryTitle(e.target.value)}
          width="100%"
          height="42px"
        />

        <span className="font-inter font-semibold text-[18px]">
          Enter the primary Project URL*
        </span>
        <InputField
          type="url"
          placeholder="Primary Project URL"
          value={primaryDescription}
          onChange={(e) => setPrimaryDescription(e.target.value)}
          width="100%"
          height="42px"
        />

        <span className="font-inter font-semibold text-[18px]">
          Enter the secondary Project ID*
        </span>
        <InputField
          type="text"
          placeholder="Secondary Project ID"
          iconSrc="/assets/projector-three-filled.svg"
          value={secondaryTitle}
          onChange={(e) => setSecondaryTitle(e.target.value)}
          width="100%"
          height="42px"
        />

        <span className="font-inter font-semibold text-[18px]">
          Enter the secondary Project URL*
        </span>
        <InputField
          type="url"
          placeholder="Secondary Project URL"
          value={secondaryDescription}
          onChange={(e) => setSecondaryDescription(e.target.value)}
          width="100%"
          height="42px"
        />
      </div>

      <div className="flex flex-col space-y-4 justify-end mt-4"> {/* Added a gap just before the button with mt-4 */}
        <form onSubmit={handleSubmit}>
          <button
            style={{ width: "1000px" }}
            type="submit"
            className={`orange-btn h-[75px] flex items-center justify-center transition-transform duration-300 ease-out transform ${
              !isValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isValid}
          >
            Check Plagiarism
            {!isValid && (
              <span className="tooltip">Fill all the required fields</span>
            )}
          </button>
        </form>
      </div>
      {plagiarismResult && (
        <div className="mt-4 text-center">
          <p className="font-bold text-lg">{plagiarismResult}</p>
        </div>
      )}
    </div>
  );
}
