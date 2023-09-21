import React from "react";
import Image from "next/image";
import handshake from "@/public/assets/handshake.png";
import { Button } from "@nextui-org/button";
const Header = () => {
  return (
    <div className="flex">
      <div className="md:w-1/2 w-full p-2">
        <h1 className="head-text">Unlock the Power of Knowledge</h1>
        <p className="font-bold my-2">
          Join us in the pursuit of learning without boundaries. Explore a world
          of ideas, collaborate with peers from diverse backgrounds, and embark
          on a journey of academic discovery. Welcome to &quot;
          <span className="text-purple-700">Proj-</span>
          <span className="text-orange">एकता</span> &quot; where your ideas take
          flight, and education knows no limits.
        </p>
        <Button type="button" className="orange-btn mt-4 flex md:mx-0 mx-auto">
          GET STARTED
        </Button>
      </div>
      <div className="m-auto md:flex hidden">
        <Image className="w-80 h-80" src={handshake} alt="Header Image" />
      </div>
    </div>
  );
};

export default Header;
