"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InputField from "@/components/login-and-signup/InputField";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@nextui-org/react";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
    contact: 0o0,
    university: "",
    course: "",
    year: 2020,
    areasOfInterest: "",
    skills: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="container">
      <h1 className="head-text">Personal Information</h1>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <InputField
          type="text"
          placeholder="Full Name"
          iconSrc="/assets/edit-name-filled.svg"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <InputField
          type="email"
          placeholder="Email ID"
          iconSrc="/assets/mail-filled.svg"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <InputField
          type="password"
          placeholder="Create Password"
          iconSrc="/assets/lock-filled.svg"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <InputField
          type="number"
          placeholder="Contact Number"
          iconSrc="/assets/phone-call-filled.svg"
          value={user.contact}
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
        />
      </div>
      <h1 className="head-text">Academic Details</h1>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <InputField
          type="text"
          placeholder="University/College Name"
          iconSrc="/assets/school-filled.svg"
          value={user.university}
          onChange={(e) => setUser({ ...user, university: e.target.value })}
        />
        <InputField
          type="text"
          placeholder="Current Course/Program Name"
          iconSrc="/assets/book-one-filled.svg"
          value={user.course}
          onChange={(e) => setUser({ ...user, course: e.target.value })}
        />
        <InputField
          type="number"
          placeholder="Start Year of Study"
          iconSrc="/assets/birthday-cake-filled.svg"
          value={user.year}
          onChange={(e) => setUser({ ...user, year: e.target.value })}
        />
      </div>
      <h1 className="head-text">Interests & Skills</h1>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <InputField
          type="text"
          placeholder="Areas of Interest (0/5)"
          iconSrc="/assets/like-filled.svg"
          value={user.areasOfInterest}
          onChange={(e) =>
            setUser({ ...user, areasOfInterest: e.target.value })
          }
          required
        />
        <InputField
          type="text"
          placeholder="Skills & Expertise(0/5)"
          iconSrc="/assets/puzzle-filled.svg"
          value={user.skills}
          onChange={(e) => setUser({ ...user, skills: e.target.value })}
          required
        />
      </div>
      {buttonDisabled ? (
        <Button
          isDisabled
          onClick={onSignup}
          className="flex orange-btn mx-auto my-5"
        >
          SignUp
        </Button>
      ) : (
        <Button onClick={onSignup} className="flex orange-btn mx-auto my-5">
          SignUp
        </Button>
      )}
    </div>
  );
}
// export default function SignupPage() {
//   const [currentStep, setCurrentStep] = useState(1);

//   const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

//   return (
//       <div className="min-h-screen flex justify-center items-center bg-white">
//         {currentStep === 1 && <PersonalInfo onNext={goToNextStep} />}
//         {currentStep === 2 && <AcademicDetails onNext={goToNextStep} />}
//         {currentStep === 3 && <InterestsSkills onNext={goToNextStep} />}
//       </div>
//   );
// }
