"use client";
import React, { useState } from "react";
import PersonalInfo from "app/signup/personal-info/page.jsx";
import AcademicDetails from "app/signup/academic-details/page.jsx";
import InterestsSkills from "app/signup/interests-skills/page.jsx";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  return (
      <div className="min-h-screen flex justify-center items-center bg-white">
        {currentStep === 1 && <PersonalInfo onNext={goToNextStep} />}
        {currentStep === 2 && <AcademicDetails onNext={goToNextStep} />}
        {currentStep === 3 && <InterestsSkills onNext={goToNextStep} />}
      </div>
  );
}
