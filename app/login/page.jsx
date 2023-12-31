// app/login/page.jsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "/components/login-and-signup/InputField";
import SocialIcon from "/components/login-and-signup/SocialIcon";
import NavigationLink from "/components/login-and-signup/NavigationLink";
// import AuthLayout from '/app/AuthLayout';
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    // <div className="min-h-screen flex justify-center items-center bg-white p-4">
    <div className="flex w-full">
      <div className="hidden md:flex w-1/2 relative">
        {/* Main Image */}
        <Image
          src="/assets/girl.png"
          alt="Main decorative image"
          fill
          className="objext-cover"
        />
      </div>

      <div className="flex flex-col justify-center m-auto">
        <div className="flex flex-col space-y-8 items-center lg:items-start">
          {/* Logo or Icon Image */}
          <Image
            src="/assets/icon.png"
            alt="Logo or icon"
            width={100}
            height={100}
            className="self-center lg:self-start"
          />

          {/* Welcome Back Text */}
          <h2 className="head-text text-4xl font-bold leading-[58px]">
            Welcome Back
          </h2>

          {/* Email Input Field */}
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
        </div>

        <div className="flex flex-col space-y-4 justify-end">
          <NavigationLink
            normalText="No account?"
            boldText="Sign Up Now"
            route="/signup"
          />
          {/* Login Button */}
          <button
            className="orange-btn h-[64px] flex items-center justify-center transition-transform duration-300 ease-out transform"
            onClick={onLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
// Login.Layout = AuthLayout;
