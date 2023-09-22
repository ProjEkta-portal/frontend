// app/login/page.jsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import InputField from "/components/login-and-signup/InputField";
import SocialIcon from "/components/login-and-signup/SocialIcon";
import NavigationLink from "/components/login-and-signup/NavigationLink";
// import AuthLayout from '/app/AuthLayout';

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="flex w-full">
        <div className="hidden md:flex w-1/2">
          {/* Main Image */}
          <Image
            src="/assets/girl.png"
            alt="Main decorative image"
            width={650}
            height={163}
          />
        </div>

        <div className="flex flex-col justify-center m-auto">
          <div className="flex flex-col space-y-8 items-center lg:items-start">
            {/* Logo or Icon Image */}
            <Image
              src="/assets/icon.png"
              alt="Logo or icon"
              width={172}
              height={163}
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
            />

            {/* Password Input Field */}
            <InputField
              type="password"
              placeholder="Password"
              iconSrc="/assets/lock-filled.svg"
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
              onClick={() => router.push("/dashboard")}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Login.Layout = AuthLayout;